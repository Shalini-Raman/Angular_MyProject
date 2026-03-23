import { Component, Input } from '@angular/core';
import { TasComponent } from './tas/tas';
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './Task.html',
  styleUrls: ['./Task.css'],
  imports: [TasComponent],
})
export class TaskComponent {
  @Input({ required: true }) name!: string;

  
}
