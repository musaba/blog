import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterUser } from './registerUser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  public registerUser: RegisterUser
  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {
    this.registerUser = new RegisterUser
  }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.registerUser)
  }

    
}
