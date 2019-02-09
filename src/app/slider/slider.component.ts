import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent {
  ImagesList:any;
  currentIndex:number=0;
  id:any;
  constructor() {
    this.ImagesList=['slider1.jpg','slider2.jpg','slider3.jpg'];
    
  } 

  ngOnInit() {}
  nextSlide(){
    if(this.currentIndex>=2)
       this.currentIndex=2;
       else this.currentIndex++;
  }

  prevSlide(){
    if(this.currentIndex<=0)
       this.currentIndex=0;
       else{
         this.currentIndex--;}
  }


  Load(index:number){
     this.currentIndex=index;
  }

  ngAfterViewInit(){
   this.repeat();
 }

 repeat(){
 if(this.currentIndex++>=2){
   this.currentIndex=-1;
   this.repeat();
 }
 else{
  this.id = setInterval(() => {
    console.log("item",this.currentIndex);
    this.repeat(); 
  }, 10000);
 }
}

ngOnDestroy() {
  if (this.id) {
    clearInterval(this.id);
  }
}
}

    
