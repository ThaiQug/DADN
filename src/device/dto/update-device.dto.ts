// update-device.dto.ts
import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class UpdateDeviceDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  value?: number;

  @IsOptional()
  @IsDate()
  time?: Date;
}