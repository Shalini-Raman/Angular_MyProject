import { Component,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTaskComponent {
@Output() cancel= new EventEmitter();

onCancel(){
  this.cancel.emit();

}
}
