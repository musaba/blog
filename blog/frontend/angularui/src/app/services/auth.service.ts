import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RegisterUser } from '../components/register/registerUser';
import { LoginUser } from '../components/login/loginUser';
import { LoginAuthor } from '../components/login/loginAuthor';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
  path = environment.path
  TOKEN_KEY = "token"

  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")
    return this.http.post(this.path + '/user/register', registerUser, { headers: headers }).subscribe(data => {
      this.router.navigate(['/login'])
    },
      err => {
        alert(err)
        alert("There were problems creating your account.")
      })
  }

  loginU(loginUser: LoginUser) {
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")
    return this.http.post(this.path + '/user/login', loginUser, { headers: headers }).subscribe(data => {
      this.saveToken(data['token'])
      this.router.navigate(['/home'])
    },
      error => {
        alert("Email or Password invalid")
      })
  }

  loginA(loginAuthor: LoginAuthor) {
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")
    return this.http.post(this.path + '/author/login', loginAuthor, { headers: headers }).subscribe(data => {
      this.saveToken(data['token'])

    })
  }



  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }
  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}