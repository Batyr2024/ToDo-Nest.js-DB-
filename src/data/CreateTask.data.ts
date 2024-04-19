import { IsNotEmpty, IsString,isNotEmpty } from "class-validator";

export class CreateTaskData {

    @IsString()
    @IsNotEmpty() 
    public text: string;

}