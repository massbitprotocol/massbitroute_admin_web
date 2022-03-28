import { Module } from '@nestjs/common';
import { MassbitStakingModule } from './massbit-staking/massbit-staking.module';

@Module({
  imports: [MassbitStakingModule],
})
export class AppModule {}
