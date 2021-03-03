import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  register1 = true;
  register2 = false;
  register3 = false;

  constructor() { }

  ngOnInit() {
  }

  exibirRegistro1(){
    this.register1 = true;
    this.register2 = false;
    this.register3 = false;
  }

  exibirRegistro2(){
    this.register1 = false;
    this.register2 = true;
    this.register3 = false;
  }

  exibirRegistro3(){
    this.register1 = false;
    this.register2 = false;
    this.register3 = true;
  }
}
