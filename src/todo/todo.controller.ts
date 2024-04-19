import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateTaskData } from '../data/CreateTask.data'
import { TodoService } from './todo.service';

@Controller('tasks')
export class TodoController {
    constructor (private todoService: TodoService) {}

    @Post()
    createTask(@Body() taskData: CreateTaskData) {
        return this.todoService.createTask(taskData)
    }

    @Get()
    getAll() {
        return this.todoService.getAllTasks();
    }

    @Delete('/:id')
    deleteOneTask(@Query('id') id:number){ 
        
        return this.todoService.delOneTask(id);
    }

    @Delete()
    deleteAllTasks(){
        return this.todoService.delAllTasks();
    }

    @Patch('/:id')
    isCheckedTask(@Query('id') id:number, @Query('check') check:boolean){
        return this.todoService.isCheckedTask(id,check);
    }

    @Patch()
    isCheckedAllTasks(@Query('check', ParseBoolPipe) check: boolean){
        return this.todoService.isCheckedAllTasks(check);
    }

    @Put('/:id')
    changeTask(@Param('id') id:number, @Param('text') text:string){
        return this.todoService.changeTask(id,text);
    }
}
