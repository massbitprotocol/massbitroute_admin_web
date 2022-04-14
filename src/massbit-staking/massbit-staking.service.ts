import { RegisterDto } from '@massbit/dto/register.dto';
import { StakingDto, StakingProjectDto } from '@massbit/dto/staking.dto';
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

  async adminRegisterProvider(registerDto: RegisterDto): Promise<any> {
    const { ADMIN_MNEMONIC, ADMIN_DERIVATION } = process.env;
    const keyring = new Keyring({ type: 'sr25519' });
    keyring.setSS58Format(42);

    const pair = keyring.addFromUri(`${ADMIN_MNEMONIC}//${ADMIN_DERIVATION}`);
    this.logger.debug(
      `Handle register provider with admin :>> ${pair.address}`,
    );

    const excuteRegister = new Promise(async (resolve, reject) => {
      try {
        const unsub = await this.api.tx.dapi
          .registerProvider(
            registerDto.providerId,
            registerDto.providerType,
            registerDto.operator,
            `${registerDto.blockchain}.${registerDto.network}`,
          )
          .signAndSend(pair, ({ status, events = [], dispatchError }) => {
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
                  reject(
                    new BadRequestException(`${dispatchError.toString()}`),
                  );
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
      } catch (error) {
        reject(new BadRequestException(error));
      }
    }).catch((err) => {
      throw new BadRequestException(err);
    });

    return await excuteRegister;
  }

  async stakingProvider(stakingDto: StakingDto): Promise<any> {
    const keyring = new Keyring({ type: 'sr25519' });
    keyring.setSS58Format(42);

    const newPair = keyring.addFromUri(stakingDto.memonic);
    this.logger.debug('Handle staking provider with :>> ', newPair.address);
    const excuteStaking = new Promise(async (resolve, reject) => {
      try {
        const unsub = await this.api.tx.dapi
          .depositProvider(stakingDto.providerId, stakingDto.amount)
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
                  reject(
                    new BadRequestException(`${dispatchError.toString()}`),
                  );
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
      } catch (error) {
        reject(new BadRequestException(error));
      }
    }).catch((err) => {
      throw new BadRequestException(err);
    });

    return await excuteStaking;
  }

  async stakingProject(stakingDto: StakingProjectDto): Promise<any> {
    const keyring = new Keyring({ type: 'sr25519' });
    keyring.setSS58Format(42);

    const newPair = keyring.addFromUri(stakingDto.memonic);
    const excuteStaking = new Promise(async (resolve, reject) => {
      try {
        const unsub = await this.api.tx.dapi
          .registerProject(
            stakingDto.projectId,
            `${stakingDto.blockchain}.${stakingDto.network}`,
            `${stakingDto.amount}000000000000000000`,
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
                  reject(
                    new BadRequestException(`${dispatchError.toString()}`),
                  );
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
      } catch (error) {
        reject(new BadRequestException(error));
      }
    }).catch((err) => {
      throw new BadRequestException(err);
    });

    return await excuteStaking;
  }
}
