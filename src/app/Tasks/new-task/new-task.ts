import { Component,Output,EventEmitter,signal ,inject,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../tas/tas.model' 
import {TaskService} from '../task.service'
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
@Output() close= new EventEmitter();
//@Output() add=new EventEmitter<NewTaskData>();
enteredTitle='';
enteredSummary='';
enteredDate='';


private taskService=inject(TaskService);
onCancel(){
  this.close.emit();

}
onSubmit(){

  this.taskService.addTask({
    title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate,
  },this.userId);
// this.add.emit({
//   title:this.enteredTitle,
//   summary:this.enteredSummary,
//   date:this.enteredDate,
// });
this.close.emit();
}
}
