import { Component,Input } from '@angular/core';
interface Task{
  id:string;
  userId:string;
  title:string;
  summary:string;
  duedate:string;

}
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
