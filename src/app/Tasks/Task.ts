import { Component, Input } from '@angular/core';
import { TasComponent } from './tas/tas';
import { NewTaskComponent } from './new-task/new-task' 
import { NewTaskData } from './tas/tas.model' 
import {TaskService} from './task.service'
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './Task.html',
  styleUrls: ['./Task.css'],
  imports: [TasComponent,NewTaskComponent],
})
export class TaskComponent {
  @Input({ required: true }) name!: string;
  @Input({required:true}) userid!: string;
 isAdingTask : boolean =false;
   // private taskService= new TaskService(); -->not recommended
//private tas
constructor(private tasksservice:TaskService){

}
  get SelectedUserTask(){
    return this.tasksservice.getusertasks(this.userid) ;
  }

  // onCompleteTask(id:string){

  // }

  onStartAddTask(){
this.isAdingTask=true;
  }

  onCloseAddTask(){
    this.isAdingTask=false;
  }


  // onAddTask(taskData: NewTaskData){
    
  //   this.isAdingTask=false;
  // }
}
