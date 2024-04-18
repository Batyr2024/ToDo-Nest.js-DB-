import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './todo.model';
import { CreateTaskDto } from 'src/dto/CreateTask.dto';
import { where } from 'sequelize';

@Injectable()
export class TodoService {

    constructor(@InjectModel(Task) private taskRepository: typeof Task) { }

    async createTask(dto: CreateTaskDto) {
        await this.taskRepository.create(dto);
    }

    async getAllTasks() {
        return await this.taskRepository.findAll();
    }

    async delOneTask(id: number) {
        await this.taskRepository.destroy({ where: { id } });
    }

    async delAllTasks() {
        await this.taskRepository.destroy({ where: { checked: true } });
    }

    async isCheckedTask(id: number, check: boolean) {
        await this.taskRepository.update({ checked: check },
            { where: { id } });
    }

    async isCheckedAllTasks(check: boolean) {
        await this.taskRepository.update({ checked:check },{ where:{checked:!check}});
    }

    async changeTask(Id:number,Text:string){
        await this.taskRepository.update({text: Text},{where:{id: Id}})
    }

}