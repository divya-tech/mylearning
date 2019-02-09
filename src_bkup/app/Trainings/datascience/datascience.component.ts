import { Component } from '@angular/core';

@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrls: ['./datascience.component.css']
})

export class DataScienceComponent {
  introduct:any;
  dsstatistics:any;
  dsimplementation:any;
  dsRprog:any;
  python:any;
  deepLearning:any;
  constructor() {
    this.introduct="/assets/Images/intro.jpg";
    this.dsstatistics="/assets/Images/dsstatistics.jpg";
    this.dsimplementation="/assets/Images/dsimplement.jpeg";
    this.dsRprog="/assets/Images/rprog.jpg";
    this.python="/assets/Images/dspython.jpg";
    this.deepLearning="/assets/Images/dsdeeplearming.jpg";
  } 

  ngOnInit() {}

  ngOnChanges() {}
}