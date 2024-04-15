import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from '../dto/CreateTask.dto'
import { TodoService } from './todo.service';

@Controller('tasks')
export class TodoController {

    constructor (private todoService: TodoService) {}

    @Post()
    create(@Body() taskDto: CreateTaskDto) {
        return this.todoService.createTask(taskDto)
    }

    @Get()
    getAll() {
        return this.todoService.getAllTasks();
    }
}
