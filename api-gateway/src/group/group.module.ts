import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { GroupController } from "./group.controller";

@Module({
    imports: [
        ClientsModule.register([{
            name: "GROUP_SERVER",
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://localhost:5672'],
              queue: "group_queue",
              queueOptions: {
                durable: true
              }
            }
        }]),
        
],
controllers: [GroupController]
})

export class GroupModule{}

