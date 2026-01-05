import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices"

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://10.10.3.137:5672'],
      queue: "teacher_queue",
      queueOptions: {
        durable: true
      }
    }
  });
  console.log('TEACHER server')
  await app.listen();
}
bootstrap();
