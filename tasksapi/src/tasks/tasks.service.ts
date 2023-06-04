import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  findAll() {
    this.taskModel.find();
  }

  async create(task: CreateTaskDto) {
    const newTask = new this.taskModel(task); 
    return await newTask.save();
  }

  async findOne(id: string) {
    return await this.taskModel.findById(id);
  }

  async delete(id: string) {
    return await this.taskModel.findByIdAndRemove(id);
  }

  async update(id: string, task: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }
  
}
