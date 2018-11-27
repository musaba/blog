import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from './user';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private router : Router) { }
  
  path = environment.path;
  TOKEN_KEY = "token"
  users: User[];

  profile(){
    let headers = new HttpHeaders()
    JSON.parse(localStorage.getItem(this.TOKEN_KEY))
    headers = headers.append("Content-Type", "application/json")
    headers.append('Authorization', 'Bearer ' + this.TOKEN_KEY);
    return this.http.get(this.path + '', { headers: headers }).subscribe(data => {
      this.saveUserData()
    })

  }

  saveUserData(){

  }


}
