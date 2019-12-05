import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formulario;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      cpf:['']
    });
  }

}
