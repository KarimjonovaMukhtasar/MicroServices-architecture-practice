import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('student-get')
  getGroups(data: string){
    console.log(21, data)
    return {
      success: true,
      data: 'SUCCESSFUL!'
    };
  }
}
