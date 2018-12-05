import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task';
//import { Observable } from 'rxjs/internal/Observable';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
//import  'rxjs/Rx';
import {  map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
import { isNgTemplate } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
//TaskList: Task;
//Url: string="htt://172.18.3.245:8081/api/Tasks";
Url: string="http://localhost:61252/api/Tasks";
constructor(private _http: Http) { }

getAll() : Observable<Task[]>
{
  console.log('hi');
  
  return this._http.get(this.Url)
  .pipe(
       map((response:Response)=>response.json())
   );  
}

Add(taskitem:Task):Observable<any>
{
  console.log(taskitem.Task);
  
  return this._http.post(this.Url,taskitem)
  .pipe(
       map((response:Response)=>response.json())       
   );  
   
   
}


Delete(id:number):Observable<any>
{
  return this._http.delete(this.Url+"/"+id)
  .pipe(
       map((response:Response)=>response.json())
   );    
}

Edit(item:Task):Observable<any>
{
  return this._http.put(this.Url,Task)
  .pipe(
       map((response:Response)=>response.json())
   );    
}
 
}
