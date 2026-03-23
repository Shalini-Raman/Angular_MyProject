import { Component,Input } from '@angular/core';
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
}
