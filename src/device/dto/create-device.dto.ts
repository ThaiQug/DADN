// create-device.dto.ts
import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateDeviceDto {
  @IsString()
  name: string;

  @IsNumber()
  value: number;

  @IsOptional()
  @IsDate()
  time?: Date;

  @IsString()
  userId: string;
}