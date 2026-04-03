import {NgModule} from '@angular/core';
import { TaskComponent } from '../Tasks/Task';

import { TasComponent } from '../Tasks/tas/tas';
import { NewTaskComponent } from '../Tasks/new-task/new-task';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
@NgModule({
declarations: [TaskComponent,
    TasComponent,
    NewTaskComponent],

exports:[TaskComponent],
imports:[SharedModule,CommonModule,FormsModule]
})

export class TaskModule{

}