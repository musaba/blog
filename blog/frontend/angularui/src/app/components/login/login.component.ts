import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { LoginUser } from './loginUser';
import { LoginAuthor } from './loginAuthor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  public loginUser:LoginUser
  constructor(
    private authService:AuthService,
    ) { 
    this.loginUser = new LoginUser()
  }
  
  ngOnInit() {
  }

  loginU(){
    this.authService.loginU(this.loginUser)
  }

  loginA(loginAuthor:LoginAuthor){
    this.authService.loginU(loginAuthor)
  }


}