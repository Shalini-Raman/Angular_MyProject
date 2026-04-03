import { NgModule } from '@angular/core';
import{ BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app';
import { HeaderComponent } from './header/Header';
import { UserComponent } from './user/user';
import { TaskComponent } from './Tasks/Task';

@NgModule({
    declarations : [AppComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,HeaderComponent,UserComponent,TaskComponent]
})
export class AppModule{

}