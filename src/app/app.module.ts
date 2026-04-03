import { NgModule } from '@angular/core';
import{ BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import {AppComponent} from './app';
import { HeaderComponent } from './header/Header';
import { UserComponent } from './user/user';
import { TaskComponent } from './Tasks/Task';
import { CardComponent } from './shared/card/card';
import { TasComponent } from './Tasks/tas/tas';
import { NewTaskComponent } from './Tasks/new-task/new-task';

@NgModule({
    declarations : [AppComponent,HeaderComponent,UserComponent,CardComponent,TaskComponent,TasComponent,NewTaskComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,FormsModule]
})
export class AppModule{

}