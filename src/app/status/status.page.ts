import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  leiaMais(){
    let link = document.getElementById("mais");
    let arrow = document.getElementById("arrow");
    let menos = document.getElementById("menos");

    if(link.style.display === "none"){
      link.style.display = "flex";
      menos.innerHTML="ver menos";
      arrow.style.transform="rotate(180deg)";

    } else{
      link.style.display = "none";
      menos.innerHTML="ver mais";
      arrow.style.transform="rotate(0)";
    }
  }

}
