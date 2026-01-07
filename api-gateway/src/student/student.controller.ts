import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Controller()
export class StudentController{
    constructor(@Inject("STUDENT_SERVER")  private studentClient: ClientProxy){}
    @Get('students')
    getStudents() {
        return this.studentClient.send('student-get', "FROM STUDENTS SERVER, HELLO TO ALL!")
    }

    @Post('students')
    createStudent(@Body() payload: {name: string, age: number, status: boolean, field: string}){
        return this.studentClient.send('student-create', payload)
    }
}
