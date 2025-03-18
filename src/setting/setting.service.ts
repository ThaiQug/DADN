import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Setting } from './setting.entity';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Injectable()
export class SettingService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Setting[]> {
    return this.prisma.setting.findMany({
      include: { device: true },
    });
  }

  async findOne(id: string): Promise<Setting> {
    const setting = await this.prisma.setting.findUnique({
      where: { id },
      include: { device: true },
    });

    if (!setting) {
      throw new NotFoundException(`Setting with ID ${id} not found`);
    }

    return setting;
  }

  async findByUser(userId: string): Promise<Setting[]> {
    return this.prisma.setting.findMany({
      where: { userId },
      include: { device: true },
    });
  }

  async findByDevice(deviceId: string): Promise<Setting[]> {
    return this.prisma.setting.findMany({
      where: { deviceId },
      include: { device: true },
    });
  }

  async create(createSettingDto: CreateSettingDto): Promise<Setting> {
    return this.prisma.setting.create({
      data: createSettingDto,
      include: { device: true },
    });
  }

  async update(id: string, updateSettingDto: UpdateSettingDto): Promise<Setting> {
    const setting = await this.prisma.setting.findUnique({
      where: { id },
    });

    if (!setting) {
      throw new NotFoundException(`Setting with ID ${id} not found`);
    }

    return this.prisma.setting.update({
      where: { id },
      data: updateSettingDto,
      include: { device: true },
    });
  }

  async remove(id: string): Promise<Setting> {
    const setting = await this.prisma.setting.findUnique({
      where: { id },
    });

    if (!setting) {
      throw new NotFoundException(`Setting with ID ${id} not found`);
    }

    return this.prisma.setting.delete({
      where: { id },
    });
  }
}