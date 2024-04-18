import { Body, Controller, Delete, Get, ParseBoolPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from '../dto/CreateTask.dto'
import { TodoService } from './todo.service';

@Controller('tasks')
export class TodoController {

    constructor (private todoService: TodoService) {}

    @Post('/create')
    createTask(@Body() taskDto: CreateTaskDto):Object {
        return this.todoService.createTask(taskDto)
    }

    @Get()
    getAll():Object {
        return this.todoService.getAllTasks();
    }

    @Delete('/delete/one')
    deleteOneTask(@Query('id') id:number){
        return this.todoService.delOneTask(id);
    }

    @Delete('/delete/all')
    deleteAllTasks(){
        return this.todoService.delAllTasks();
    }

    @Patch('/checked/one')
    isCheckedTask(@Query('id') id:number, @Query('check') check:boolean){
        return this.todoService.isCheckedTask(id,check);
    }

    @Patch('/checked/all')
    isCheckedAllTasks(@Query('check', ParseBoolPipe) check: boolean){
        return this.todoService.isCheckedAllTasks(check);
    }

    @Patch('/change_task')
    changeTask(@Query('id') id:number, @Query('text') text:string){
        return this.todoService.changeTask(id,text);
    }
}
