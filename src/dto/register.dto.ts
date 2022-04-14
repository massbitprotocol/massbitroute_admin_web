import { IsArray, IsString, IsUUID } from 'class-validator';

enum ProviderType {
  GATEWAY = 'Gateway',
  NODE = 'Node',
}
export class RegisterDto {
  @IsUUID()
  providerId: string;

  @IsString()
  providerType: ProviderType;

  @IsString()
  operator: string;

  @IsString()
  blockchain: string;

  @IsString()
  network: string;
}
