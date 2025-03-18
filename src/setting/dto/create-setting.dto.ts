// create-setting.dto.ts
import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateSettingDto {
  @IsDate()
  timeStart: Date;

  @IsDate()
  timeEnd: Date;

  @IsNumber()
  valueStart: number;

  @IsNumber()
  valueEnd: number;

  @IsString()
  status: string;

  @IsString()
  userId: string;

  @IsString()
  deviceId: string;
}