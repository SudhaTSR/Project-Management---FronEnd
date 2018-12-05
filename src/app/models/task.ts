import { DatePipe } from "@angular/common/src/pipes/date_pipe";

export class Task {
    Task : string;
    Priority : number;
    Parent_ID : number;
    Project_ID:number;        
    Start_Date : DatePipe;
    End_Date : DatePipe;    
    UserId :number;
    UserName: string;
    ParentTaskName : string
    Status: string;
    ProjectName : string;
}


