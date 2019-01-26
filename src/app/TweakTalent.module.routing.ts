import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseComponent } from './course/course.component'; 

import { ContactusComponent } from './contactus/contactus.component'; 


const routes: Routes = [
    { path: 'course', component: CourseComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'whatwedo', component: ContactusComponent}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
      RouterModule
   ] 
})
export class RoutingModule { };