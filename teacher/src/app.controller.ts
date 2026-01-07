import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher, TeacherDocument } from './teacher.schema';
import { Model } from 'mongoose';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
     @InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>
  ) {}

  @MessagePattern('teacher-get')
  async getTeachers(){
    console.log('Teacher server is running successfully!')
    const teachers = await this.
    return {
      success: true,
      data: 'SUCCESSFUL!'
    };
  }

  @MessagePattern('teacher-create')
  createTeacher(payload: {name: string, age: number, profession: string, status: boolean}){
    console.log(21, 'Teacher server is running successfully!')

    return {
      success: true,
      data: 'SUCCESSFUL!'
    };
  }
}
