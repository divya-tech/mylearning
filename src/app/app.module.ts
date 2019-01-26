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


@NgModule({
  imports:      [ BrowserModule, FormsModule,RoutingModule,ReactiveFormsModule],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, SliderComponent, ImgComponent,CourseComponent,ContactusComponent ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
