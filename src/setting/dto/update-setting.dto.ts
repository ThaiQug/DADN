// update-setting.dto.ts
import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class UpdateSettingDto {
  @IsOptional()
  @IsDate()
  timeStart?: Date;

  @IsOptional()
  @IsDate()
  timeEnd?: Date;

  @IsOptional()
  @IsNumber()
  valueStart?: number;

  @IsOptional()
  @IsNumber()
  valueEnd?: number;

  @IsOptional()
  @IsString()
  status?: string;
}