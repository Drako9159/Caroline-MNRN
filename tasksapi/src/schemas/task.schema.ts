import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
@Schema({
  timestamps: true,
})
export class Task {
  @Prop({ required: true, unique: true, trim: true })
  title: String;
  @Prop({ required: true, trim: true })
  description: String;
  @Prop({ default: false })
  done: Boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
