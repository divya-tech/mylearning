import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { ImgComponent } from './slider/img.component';
import { CourseComponent} from './course/course.component';
import { RoutingModule } from './TweakTalent.module.routing';
import { ContactusComponent} from './contactus/contactus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent} from './home/home.component';
import { TrainingsComponent} from './Trainings/trainings.component';
import { whatWeDoComponent } from './what-we-do/what-we-do.component';
import { DataScienceComponent} from './Trainings/datascience/datascience.component';
import { BigDataComponent } from './Trainings/bigdata/bigdata.component';
import { datascienceImage } from './Trainings/datascience/img.component';
import { DSIntroductionComponent } from './Trainings/datascience/dsintroduction/dsintroduction.component';
import { DSStatisticsComponent} from './Trainings/datascience/dsstatistics/dsstatistics.component';
import { UnderstandingandImplementationComponent} from './Trainings/datascience/dsUnderstandingandImplementation/understanding.component';
import { RProgrammingComponent} from './Trainings/datascience/rprograming/rprogramming.component';
import{ PythonComponent } from './Trainings/datascience/python/python.component';
import { DeepLearningComponent} from './Trainings/datascience/deeplearning/deeplearning.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RoutingModule,ReactiveFormsModule],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, SliderComponent, ImgComponent,CourseComponent,ContactusComponent,HomeComponent,TrainingsComponent,whatWeDoComponent,DataScienceComponent,
    BigDataComponent,datascienceImage,DSIntroductionComponent,DSStatisticsComponent,UnderstandingandImplementationComponent,RProgrammingComponent,PythonComponent,DeepLearningComponent],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
