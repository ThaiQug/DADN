// setting.entity.ts
import { User } from '../user/user.entity';
import { Device } from '../device/device.entity';

export class Setting {
  id: string;
  timeStart: Date;
  timeEnd: Date;
  valueStart: number;
  valueEnd: number;
  status: string;
  userId: string;
  deviceId: string;
  user?: User;
  device?: Device;
}