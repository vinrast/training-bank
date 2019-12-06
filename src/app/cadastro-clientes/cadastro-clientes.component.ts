import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.sass']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro;
  constructor(
    private fb           : FormBuilder,
    private user_service : AppService,
    private router       : Router
  ) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      'name'    : [''],
      'cpf'     : [''],
      'email'   : [''],
      'phone'   : [''],
      'address' : ['']
    });
  }

  cadastro = () => {

    this.user_service.createUser(this.formCadastro.value).subscribe(data => {
      this.user_service.storeToken(data.cpf);
    })

    this.verificaCadastro();
  }

  verificaCadastro() {
  
    if (this.user_service.getToken()) {
      this.router.navigate(['home-logada']);
    } else {
      return false;
    }
  }


}
