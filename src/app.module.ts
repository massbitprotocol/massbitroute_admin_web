import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { MassbitStakingModule } from './massbit-staking/massbit-staking.module';

@Module({
  imports: [MassbitStakingModule, HealthCheckModule, HttpModule],
})
export class AppModule {}
