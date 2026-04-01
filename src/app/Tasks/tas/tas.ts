import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Task } from './tas.model' 
@Component({
  selector: 'app-tas',
  standalone: true,
  imports: [],
  templateUrl: './tas.html',
  styleUrl: './tas.css'
})
export class TasComponent {
@Input({required:true}) tas!:Task;
@Output() complete=new EventEmitter<string>();


onCompleteTask(){
  this.complete.emit(this.tas.id);
}


}
