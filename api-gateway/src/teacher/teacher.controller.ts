import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ClientProxy, MessagePattern } from "@nestjs/microservices";

@Controller()
export class TeacherController{
    constructor(@Inject("TEACHER_SERVER")  private teacherClient: ClientProxy){}
    @Get('teachers')
    getTeachers() {
        return this.teacherClient.send('teacher-get', "hello from teacher server!")
    }
    
    @Post('teachers')
    createTeacher(@Body() payload: {name: string, age: number, profession: string, status: boolean}) {
        return this.teacherClient.send('teacher-create', payload)
    }
}
