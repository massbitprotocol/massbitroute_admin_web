import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { StakingDto, StakingProjectDto } from '@massbit/dto/staking.dto';
import { MassbitStakingService } from './massbit-staking.service';
import { RegisterDto } from '@massbit/dto/register.dto';
import { UnRegisterDto } from '@massbit/dto/unregister.dto';

@Controller('massbit')
export class MassbitStakingController {
  constructor(private stakingService: MassbitStakingService) {}

  @Post('admin/register-provider')
  async adminRegisterProvider(
    @Res() res: Response,
    @Body() registerDto: RegisterDto,
  ): Promise<any> {
    await this.stakingService.adminRegisterProvider(registerDto);

    return res.json({
      status: 'success',
    });
  }

  @Post('unregister-provider')
  async unRegisterProvider(
    @Res() res: Response,
    @Body() unRegisterDto: UnRegisterDto,
  ): Promise<any> {
    await this.stakingService.unRegisterProvider(unRegisterDto);

    return res.json({
      status: 'success',
    });
  }

  @Post('staking-provider')
  async stakingProvider(
    @Res() res: Response,
    @Body() stakingDto: StakingDto,
  ): Promise<any> {
    const result = await this.stakingService.stakingProvider(stakingDto);

    return res.json({
      status: 'success',
      data: result,
    });
  }

  @Post('staking-project')
  async stakingProject(
    @Res() res: Response,
    @Body() stakingDto: StakingProjectDto,
  ): Promise<any> {
    await this.stakingService.stakingProject(stakingDto);

    return res.json({
      status: 'success',
    });
  }
}
