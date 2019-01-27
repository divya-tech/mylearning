import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseComponent } from './course/course.component'; 

import { ContactusComponent } from './contactus/contactus.component'; 
import { HomeComponent } from './home/home.component';
import { TrainingsComponent } from './Trainings/trainings.component';
import { whatWeDoComponent } from './what-we-do/what-we-do.component';
import { BigDataComponent } from './Trainings/bigdata/bigdata.component';
import { DataScienceComponent } from './Trainings/datascience/datascience.component';


const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'course', component: CourseComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'whatwedo', component: whatWeDoComponent},
    { path: 'trainings', component: TrainingsComponent},
    { path: 'trainings/bigdata', component: BigDataComponent},
    { path: 'trainings/datascience', component: DataScienceComponent}
    
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
      RouterModule
   ] 
})
export class RoutingModule { };