import { NgModule } from '@angular/core';
import{ BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import {AppComponent} from './app';
import { HeaderComponent } from './header/Header';
import { UserComponent } from './user/user';
import { TaskComponent } from './Tasks/Task';

import { TasComponent } from './Tasks/tas/tas';
import { NewTaskComponent } from './Tasks/new-task/new-task';
import {SharedModule} from './shared/shared.module';
@NgModule({
    declarations : [AppComponent,HeaderComponent,UserComponent,TaskComponent,TasComponent,NewTaskComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,FormsModule,SharedModule]
})
export class AppModule{

}