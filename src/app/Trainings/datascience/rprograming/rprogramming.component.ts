import { Component } from '@angular/core';

@Component({
  selector: 'app-rprogram',
  templateUrl: './rprogramming.component.html',
  styleUrls: ['./rprogramming.component.css']
})

export class RProgrammingComponent {

    dsintro:any;
    constructor(){
      this.dsintro= "/assets/Images/banner/rprog.jpg";
    }
}