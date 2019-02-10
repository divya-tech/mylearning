import { Component } from '@angular/core';

@Component({
  selector: 'app-understand',
  templateUrl: './understanding.component.html',
  styleUrls: ['./understanding.component.css']
})

export class UnderstandingandImplementationComponent {

    dsintro:any;
    constructor(){
      this.dsintro= "/assets/Images/banner/understanding.jpg";
    }
}