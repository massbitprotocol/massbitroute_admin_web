import { IsString, IsUUID } from 'class-validator';

enum ProviderType {
  GATEWAY = 'Gateway',
  NODE = 'Node',
}
export class StakingDto {
  @IsString()
  memonic: string;

  @IsUUID()
  providerId: string;

  @IsString()
  providerType: ProviderType;

  @IsString()
  amount: string;

  @IsString()
  blockchain: string;

  @IsString()
  network: string;
}

export class StakingProjectDto {
  @IsString()
  memonic: string;

  @IsUUID()
  projectId: string;

  @IsString()
  amount: string;

  @IsString()
  blockchain: string;

  @IsString()
  network: string;
}
