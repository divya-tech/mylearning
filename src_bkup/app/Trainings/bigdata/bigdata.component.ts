import { Component } from '@angular/core';

@Component({
  selector: 'app-bigdata',
  templateUrl: './bigdata.component.html',
  styleUrls: ['./bigdata.component.css']
})

export class BigDataComponent {
  urlpath:any;
  constructor() {
    this.urlpath="/assets/Images/big-data_shutterstock_606840716_700x420-675x380.jpg";
  }
  
  ngOnInit() {}

  ngOnChanges() {}
}