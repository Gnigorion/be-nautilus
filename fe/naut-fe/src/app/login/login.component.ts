import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  switchCard:Boolean = true
  rot = ''
  constructor() { }
  userForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  ngOnInit(): void {
  }
  login() {
    const email = this.userForm.get('email').value
    const password = this.userForm.get('password').value
  }
  change() {
    this.rot = 'rot'
    this.switchCard = !this.switchCard
  }
}
