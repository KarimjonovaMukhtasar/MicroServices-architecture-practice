import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { StudentController } from "./student.controller";

@Module({
    imports: [
        ClientsModule.register([{
            name: "STUDENT_SERVER",
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://localhost:5672'],
              queue: "student_queue",
              queueOptions: {
                durable: true
              }
            }
        }]),    
],
controllers: [StudentController]
})

export class StudentModule{}

