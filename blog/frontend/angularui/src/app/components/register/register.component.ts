import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterUser } from './registerUser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
public registerUser: RegisterUser
  constructor(private authService:AuthService,private http:HttpClient) { 
    this.registerUser = new RegisterUser
  }

  ngOnInit() {
  }

  register(registerUser:RegisterUser){
    this.authService.register(registerUser)
  }
}
