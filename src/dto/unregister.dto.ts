import { IsArray, IsString, IsUUID } from 'class-validator';

export class UnRegisterDto {
  @IsUUID()
  providerId: string;

  @IsString()
  memonic: string;
}
