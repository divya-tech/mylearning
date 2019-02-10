import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseComponent } from './course/course.component'; 

import { ContactusComponent } from './contactus/contactus.component'; 
import { HomeComponent } from './home/home.component';
import { TrainingsComponent } from './Trainings/trainings.component';
import { whatWeDoComponent } from './what-we-do/what-we-do.component';
import { BigDataComponent } from './Trainings/bigdata/bigdata.component';
import { DataScienceComponent } from './Trainings/datascience/datascience.component';
import { DSIntroductionComponent } from './Trainings/datascience/dsintroduction/dsintroduction.component';
import { DSStatisticsComponent } from './Trainings/datascience/dsstatistics/dsstatistics.component';
import { UnderstandingandImplementationComponent} from './Trainings/datascience/dsUnderstandingandImplementation/understanding.component';
import{ RProgrammingComponent} from './Trainings/datascience/rprograming/rprogramming.component';
import { PythonComponent} from './Trainings/datascience/python/python.component';
import { DeepLearningComponent} from './Trainings/datascience/deeplearning/deeplearning.component';
const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'course', component: CourseComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'whatwedo', component: whatWeDoComponent},
    { path: 'trainings', component: TrainingsComponent},
    { path: 'trainings/bigdata', component: BigDataComponent},
    { path: 'trainings/datascience', component: DataScienceComponent},
    { path: 'trainings/datascience/introduction', component: DSIntroductionComponent},
    { path: 'trainings/datascience/statistics', component: DSStatisticsComponent},
    { path: 'trainings/datascience/understandandImplement', component: UnderstandingandImplementationComponent},
    { path: 'trainings/datascience/rprogramming', component: RProgrammingComponent},
    { path: 'trainings/datascience/python', component: PythonComponent},
    { path: 'trainings/datascience/deepLearning', component: DeepLearningComponent},
    
    
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
      RouterModule
   ] 
})
export class RoutingModule { };