import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
        private readonly prisma: PrismaService
  ) {}

  @MessagePattern('group-get')
  async getGroups(){
    console.log('GROUP IS WORKING SUCCESSFULLY')
    const data = await this.prisma.group.findMany()
    return {
      success: true,
      message: `SUCCESSFULLY RETRIEVED ALL DATA FROM GROUPS DATABASE!`,
      data
    };
  }

  
  @MessagePattern('group-create')
  async createGroup(payload: { name: string, startDate: string, endDate: string}){
      const start = new Date(payload.startDate);
      const end = new Date(payload.endDate);
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      throw new Error(`Invalid date format provided. Start: ${payload.startDate}, End: ${payload.endDate}`);
    }
      const newGroup = await this.prisma.group.create({data: {...payload,  startDate: start, endDate: end}})
      return {
      success: true,
      message: `SUCCESSFULLY CREATED NEW DATA TO GROUPS DATABASE!`,
      data: newGroup
    };
  }
}
