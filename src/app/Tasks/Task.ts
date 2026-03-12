import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './Task.html',
  styleUrls: ['./Task.css'],
  imports: [],
})
export class TaskComponent {
  @Input({ required: true }) name!: string;

  
}
