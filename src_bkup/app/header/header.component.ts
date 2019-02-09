import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  trainings=["Data Science Courses","Big Data Courses"];
  constructor() {} 

  ngOnInit() {}

  ngOnChanges() {}
}