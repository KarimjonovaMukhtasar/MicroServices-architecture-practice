import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from './teacher.schema';

@Module({
  imports: [MongooseModule.forFeature([
      { name: Teacher.name, schema: TeacherSchema },
    ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
