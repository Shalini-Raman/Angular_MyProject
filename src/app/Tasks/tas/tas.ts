import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Task } from './tas.model' 
import { CardComponent } from '../../shared/card/card';
import { DatePipe  } from '@angular/common';
import {TaskService} from '../task.service'
@Component({
  selector: 'app-tas',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './tas.html',
  styleUrl: './tas.css'
})
export class TasComponent {
@Input({required:true}) tas!:Task;
@Output() complete=new EventEmitter<string>();
constructor(private taskservice:TaskService){

}
onCompleteTask(){
  this.taskservice.removeTask(this.tas.id);
}


}
