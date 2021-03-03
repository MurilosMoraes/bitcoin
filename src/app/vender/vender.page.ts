import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.page.html',
  styleUrls: ['./vender.page.scss'],
})
export class VenderPage implements OnInit {

  vender1 = true;
  vender2 = false;
  vender3 = false;
  vender4 = false;

  constructor() { }

  ngOnInit() {
  }

  exibirVender1(){
    this.vender1 = true;
    this.vender2 = false;
    this.vender3 = false;
    this.vender4 = false;
  }

  exibirVender2(){
    this.vender1 = false;
    this.vender2 = true;
    this.vender3 = false;
    this.vender4 = false;

  }
  exibirVender3(){
    this.vender1 = false;
    this.vender2 = false;
    this.vender3 = true;
    this.vender4 = false;

  }
  exibirVender4(){
    this.vender1 = false;
    this.vender2 = false;
    this.vender3 = false;
    this.vender4 = true;

  }

}
