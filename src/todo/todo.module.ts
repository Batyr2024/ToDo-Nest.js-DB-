import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Sequelize } from 'sequelize';
import { SequelizeMethod } from 'sequelize/types/utils';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './todo.model';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports:[
    SequelizeModule.forFeature([Task])
  ]
})
export class TodoModule {}
