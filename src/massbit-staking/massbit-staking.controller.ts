import { StakingDto } from '@massbit/dto/staking.dto';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { MassbitStakingService } from './massbit-staking.service';

@Controller('massbit')
export class MassbitStakingController {
  constructor(private stakingService: MassbitStakingService) {}

  @Post('/staking')
  async staking(
    @Res() res: Response,
    @Body() stakingDto: StakingDto,
  ): Promise<any> {
    await this.stakingService.staking(stakingDto);

    return res.json({
      status: 'success',
    });
  }
}
