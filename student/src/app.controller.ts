import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
        private readonly prisma: PrismaService
  ) {}

  @MessagePattern('student-get')
  async getStudents(){
    console.log('STUDENT SERVER IS WORKING SUCCESSFULLY')
    const data = await this.prisma.student.findMany()
    return {
      success: true,
      message: `SUCCESSFULLY RETRIEVED ALL DATA FROM STUDENTS DATABASE!`,
      data
    };
  }

  
  @MessagePattern('student-create')
  async createStudent(payload: { name: string, age: number, status: boolean, field: string }){
      const newStudent = await this.prisma.student.create({data: {...payload}})
      return {
      success: true,
      message: `SUCCESSFULLY CREATED NEW DATA TO STUDENTS DATABASE!`,
      data: newStudent
    };
  }
}
