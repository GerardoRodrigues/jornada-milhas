import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: [null],
        senha: [null]
      })
  }

  login(){
    console.log(this.loginForm.value)
  }
}
