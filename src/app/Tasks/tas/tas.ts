import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Task } from './tas.model' 
import { CardComponent } from '../../shared/card/card';
import { DatePipe  } from '@angular/common';

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


onCompleteTask(){
  this.complete.emit(this.tas.id);
}


}
