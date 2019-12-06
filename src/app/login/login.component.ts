import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  formLogin;
  theEvent;
  key;
  regex;
  keys;
  getCadastro;
  message;
  user;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private user_service: AppService
    ) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      cpf: ['']
    });
  }

  onlynumber(evt) {

    this.theEvent = evt || window.event;
    this.key      = this.theEvent.keyCode || this.theEvent.which;
    this.key      = String.fromCharCode(this.key);
    this.regex    = /^[0-9.]+$/;

    if (!this.regex.test(this.key)) {

      this.theEvent.returnValue = false;

      if (this.theEvent.preventDefault) {
        this.theEvent.preventDefault();
      }
    }
  }
  login() {

    this.user = this.user_service.getUser(this.formLogin.get('cpf').value);

    if (this.user) {
      this.router.navigate(['home-logada']);
    } else {
      return console.log('user not found')
      // this.openDialog();
    }
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(ModalNotCadastroComponent, {
  //     height: '350px'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}