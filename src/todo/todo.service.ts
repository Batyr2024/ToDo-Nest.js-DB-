import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './todo.model';
import { CreateTaskData } from 'src/data/CreateTask.data';

@Injectable()
export class TodoService {

    constructor(@InjectModel(Task) private taskRepository: typeof Task) { }

    async createTask(data: CreateTaskData) { 
        await this.taskRepository.create(data);
    }

    async getAllTasks() {
        return await this.taskRepository.findAll();
    }

    async delOneTask(id: number) {
        await this.taskRepository.destroy({ where: { id } });
    }

    async delAllTasks() {
        await this.taskRepository.destroy({ where: { isChecked: true } });
    }

    async isCheckedTask(id: number, check: boolean) {
        await this.taskRepository.update({ isChecked: check },
            { where: { id } });
    }

    async isCheckedAllTasks(check: boolean) {
        await this.taskRepository.update({ isChecked:check },{ where:{isChecked:!check}});
    }

    async changeTask(Id:number,Text:string){
        await this.taskRepository.update({text: Text},{where:{id: Id}})
    }

}