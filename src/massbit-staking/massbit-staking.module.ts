import { Module } from '@nestjs/common';
import { MassbitStakingService } from './massbit-staking.service';
import { MassbitStakingController } from './massbit-staking.controller';

@Module({
  providers: [MassbitStakingService],
  controllers: [MassbitStakingController]
})
export class MassbitStakingModule {}
