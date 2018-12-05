import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from  '@angular/forms';
import  {RouterModule,Routes} from '@angular/router';
import {HttpModule}  from '@angular/http';
import {HttpClientModule}  from  '@angular/common/http';
import {enableProdMode} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './ui/add-task/add-task.component';
import { UpdateTaskComponent } from './ui/update-task/update-task.component';
import { ViewTaskComponent } from './ui/view-task/view-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Route } from '@angular/compiler/src/core';
import { SharedService } from 'src/app/sevices/shared.service';
import {  map } from 'rxjs/operators';
import { UserFilterPipe } from 'src/app/users/user-filter.pipe';
import {UserService} from './users/shared/user.service';

const appRoutes:Routes =[
// {path:'addTask',component:AddTaskComponent},
// {path:'viewTask',component:ViewTaskComponent},
// {path:'updateTask',component:UpdateTaskComponent}
{path:'Project',component:AddTaskComponent},
{path:'tasks',component:AddTaskComponent},
{path:'Users',component:UsersComponent},
{path:'ViewTask',component:ViewTaskComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    TaskComponent,
    TasksListComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    ViewTaskComponent,
    UserFilterPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    AppRoutingModule,    
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],  
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
