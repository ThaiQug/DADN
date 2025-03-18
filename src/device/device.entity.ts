// device.entity.ts
import { User } from '../user/user.entity';
import { Setting } from '../setting/setting.entity';

export class Device {
  id: string;
  name: string;
  value: number;
  time: Date;
  userId: string;
  user?: User;
  settings?: Setting[];
}