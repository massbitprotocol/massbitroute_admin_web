import { StakingDto } from '@massbit/dto/staking.dto';
import {
  BadRequestException,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/keyring';
import { waitReady } from '@polkadot/wasm-crypto';

@Injectable()
export class MassbitStakingService implements OnModuleInit {
  private readonly logger = new Logger(MassbitStakingService.name);
  private api: ApiPromise;

  async onModuleInit() {
    this.logger.log('Connecting to substrate chain...');
    await waitReady();

    const { SUBSTRATE_URL } = process.env;
    const wsProvider = new WsProvider(SUBSTRATE_URL);
    this.api = await ApiPromise.create({ provider: wsProvider });

    this.logger.log('Connected to substrate chain!');
  }

  async staking(stakingDto: StakingDto): Promise<any> {
    const keyring = new Keyring({ type: 'sr25519' });
    keyring.setSS58Format(42);

    const newPair = keyring.addFromUri(stakingDto.memonic);

    const excuteStaking = new Promise(async (resolve, reject) => {
      const unsub = await this.api.tx.dapi
        .registerProvider(
          stakingDto.providerId,
          stakingDto.providerType,
          `${stakingDto.blockchain}-${stakingDto.network}`,
        )
        .signAndSend(newPair, ({ status, events = [], dispatchError }) => {
          if (status.isFinalized) {
            if (dispatchError) {
              if (dispatchError.isModule) {
                const decoded = this.api.registry.findMetaError(
                  dispatchError.asModule,
                );
                const { docs, name, section } = decoded;

                reject(
                  new BadRequestException(
                    `${name} (${section}): ${docs.join(' ')}`,
                  ),
                );
              } else {
                reject(new BadRequestException(`${dispatchError.toString()}`));
              }
            } else {
              const blockHash = status.asFinalized.toString();
              unsub();
              resolve(blockHash);
            }
            unsub();
            resolve(true);
          }
        });
    });

    return await excuteStaking;
  }
}
