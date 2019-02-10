import { Component } from '@angular/core';

@Component({
  selector: 'app-deepLearning',
  templateUrl: './deeplearning.component.html',
  styleUrls: ['./deeplearning.component.css']
})

export class DeepLearningComponent {

    dsintro:any;
    constructor(){
      this.dsintro= "/assets/Images/banner/rprog.jpg";
    }
}