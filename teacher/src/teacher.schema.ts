import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeacherDocument = Teacher & Document;

@Schema()
export class Teacher {
  @Prop()
  name: string;

  @Prop()
  age: number

  @Prop()
  status: boolean

  @Prop()
  profession: string

}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
 
