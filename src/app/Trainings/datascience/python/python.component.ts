import { Component } from '@angular/core';

@Component({
  selector: 'app-dsintro',
  templateUrl: '/python.component.html',
  styleUrls: ['./python.component.css']
})

export class PythonComponent {
  dsintro:any;
  constructor(){
    this.dsintro= "/assets/Images/banner/python.jpg";
  }
    
}