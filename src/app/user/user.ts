import { Component, signal, computed, Input,Output, input,EventEmitter } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import {User } from './user.model'

//import { CardComponent } from '../shared/card/card';
//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// type User={
//   id:string;
//   avatar:string;
//   name:string;
// }


@Component({
  selector: 'app-user',
  standalone: false,
  //imports: [CardComponent],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  //  imagePath = computed(() => this.selectedUser().avatar);
  // get imagePath() {
  //return this.avatar;
  //}

  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  @Output() select= new EventEmitter<string>();
  //avatar = input.required<string>();
  //name = input.required<string>();
  //imagePath = computed(() => {
  //  return this.avatar;
  //});
  get imagePath() {
    return this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //console.log('Clicked!');
  }
}
