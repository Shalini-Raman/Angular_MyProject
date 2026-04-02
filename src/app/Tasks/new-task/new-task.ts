import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTaskComponent {
@Output() cancel= new EventEmitter();
enteredTitle='';
enteredSummary='';
enteredDate='';
onCancel(){
  this.cancel.emit();

}
}
