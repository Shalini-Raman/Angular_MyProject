import { NgModule } from '@angular/core';
import{ BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import {AppComponent} from './app';
import { HeaderComponent } from './header/Header';
import { UserComponent } from './user/user';

import {SharedModule} from './shared/shared.module';
import {TaskModule} from './Tasks/Task.module';
@NgModule({
    declarations : [AppComponent,HeaderComponent,UserComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,FormsModule,SharedModule,TaskModule]
})
export class AppModule{

}