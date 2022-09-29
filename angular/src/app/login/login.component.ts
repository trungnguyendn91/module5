import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Ilogin} from '../ilogin';
let id = 1;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  logins: Ilogin[] = [
    {
      id: 1,
      email: 'trung@gmail.com',
      password: '123456'
    }
  ];
  login: Ilogin;

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    this.login = this.loginForm.value;
    this.login.id = id++;
    this.logins.push(this.login);
    console.log(this.logins);
  }
}
