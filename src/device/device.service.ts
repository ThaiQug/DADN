import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Device } from './device.entity';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Injectable()
export class DeviceService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Device[]> {
    return this.prisma.device.findMany({
      include: { settings: true },
    });
  }

  async findOne(id: string): Promise<Device> {
    const device = await this.prisma.device.findUnique({
      where: { id },
      include: { settings: true },
    });

    if (!device) {
      throw new NotFoundException(`Device with ID ${id} not found`);
    }

    return device;
  }

  async findByUser(userId: string): Promise<Device[]> {
    return this.prisma.device.findMany({
      where: { userId },
      include: { settings: true },
    });
  }

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.prisma.device.create({
      data: createDeviceDto,
      include: { settings: true },
    });
  }

  async update(id: string, updateDeviceDto: UpdateDeviceDto): Promise<Device> {
    const device = await this.prisma.device.findUnique({
      where: { id },
    });

    if (!device) {
      throw new NotFoundException(`Device with ID ${id} not found`);
    }

    return this.prisma.device.update({
      where: { id },
      data: updateDeviceDto,
      include: { settings: true },
    });
  }

  async remove(id: string): Promise<Device> {
    const device = await this.prisma.device.findUnique({
      where: { id },
    });

    if (!device) {
      throw new NotFoundException(`Device with ID ${id} not found`);
    }

    return this.prisma.device.delete({
      where: { id },
      include: { settings: true },
    });
  }
}