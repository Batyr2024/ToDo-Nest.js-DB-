import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { toDefaultValue } from "sequelize/types/utils";

interface TaskCreation {
    text: string;
}

@Table({tableName:'tasks'})
export class Task extends Model <Task, TaskCreation>{
    @Column({type:DataType.INTEGER, unique:true,autoIncrement:true, allowNull: false, primaryKey: true})
    id: number;

    @Column({type:DataType.STRING, allowNull: false})
    text: string;

    @Column({type:DataType.BOOLEAN, defaultValue: false, allowNull: false})
    checked: boolean;
}