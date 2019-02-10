import { Component } from '@angular/core';

@Component({
  selector: 'app-dsintro',
  templateUrl: './dsintroduction.component.html',
  styleUrls: ['./dsintroduction.component.css']
})

export class DSIntroductionComponent {
  dsintro:any;
  constructor(){
    this.dsintro= "/assets/Images/banner/introbanner.png";
  }
    
}