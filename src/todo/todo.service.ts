import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './todo.model';
import { CreateTaskDto } from 'src/dto/CreateTask.dto';

@Injectable()
export class TodoService {

    constructor(@InjectModel(Task) private taskRepository: typeof Task){}

    async createTask(dto: CreateTaskDto){
        const task = await this.taskRepository.create(dto);
        return task;
    }

    async getAllTasks() {
        const AllTasks = await this.taskRepository.findAll();
        return AllTasks;
    }
}
