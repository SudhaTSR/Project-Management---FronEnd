import { Injectable } from '@angular/core';
import{User} from './user.model'
import {Http,RequestOptions,Response,Headers,RequestMethod} from '@angular/http'
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class UserService {
selectedUser: User;
users: User[];
userlist:Observable<any>;
  constructor(private http:HttpClient) 
  { }

  postUser(user:User){
    console.log(user);
    user.User_ID=1;
   // var body= Jsonp.() 
 return this.http.post('http://localhost:61252/api/users',user);
  }
  getUser() :Observable<any>
  {
   return this.http.get('http://localhost:61252/api/users')    
  }

  getUsers() 
  {
   return this.http.get<User[]>('http://localhost:61252/api/users')
   .subscribe(data=>this.users=data);   
  }

  PutUser(user_ID,user:User)
  {
  return this.http.put('http://localhost:61252/api/users'+user_ID,user);
  }
  
  DeleteUser(User_ID:number)
  {
    // console.log(User_ID);
     console.log('http://localhost:61252/api/users'+User_ID);
   return  this.http.delete('http://localhost:61252/api/users/?id='+User_ID)    
  }
}
