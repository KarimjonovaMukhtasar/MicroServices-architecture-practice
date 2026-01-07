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
    const teachers = await this.teacherModel.find()
    return {
      success: true,
      message: 'SUCCESSFULLY RETRIEVED FROM TEACHERS DATABASE!',
      data: teachers
    };
  }

  @MessagePattern('teacher-create')
  async createTeacher(payload: {name: string, age: number, profession: string, status: boolean}){
    console.log('Teacher server is running successfully!')
    const newTeacher = await this.teacherModel.create({...payload})
    return {
      success: true,
      message: 'SUCCESSFULLY CREATED A NEW TEACHER TO THE DATABASE!',
      data: newTeacher
    };
  }
}
