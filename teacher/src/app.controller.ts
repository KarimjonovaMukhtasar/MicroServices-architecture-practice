import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('teacher-create')
  createTeacher(data: object){
    console.log(21, data)
    return {
      success: true,
      data: 'SUCCESSFUL!'
    };
  }
}
