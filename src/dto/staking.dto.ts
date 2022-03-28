import { IsString, IsUUID } from 'class-validator';

export class StakingDto {
  @IsString()
  memonic: string;

  @IsUUID()
  providerId: string;

  @IsString()
  providerType: string;

  @IsString()
  blockchain: string;

  @IsString()
  network: string;
}
