import { Component } from '@angular/core';

import { HeaderComponent } from './header/Header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './Tasks/Task';
import { NgFor } from '@angular/common'
import { NgIf }from '@angular/common'
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [HeaderComponent, UserComponent,TaskComponent,NgFor,NgIf],
})
export class AppComponent {
  users = DUMMY_USERS;
selectedId='';
get SelectedUser(){
  return this.users.find((user)=> user.id === this.selectedId )!;
}
  onSelectUser(id:string){
this.selectedId=id;

  }
}
