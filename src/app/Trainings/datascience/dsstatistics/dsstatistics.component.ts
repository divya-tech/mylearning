import { Component } from '@angular/core';

@Component({
  selector: 'app-dsstat',
  templateUrl: './dsstatistics.component.html',
  styleUrls: ['./dsstatistics.component.css']
})

export class DSStatisticsComponent {

    dsintro:any;
    constructor(){
      this.dsintro= "/assets/Images/banner/dsstatistics.jpg";
    }
}