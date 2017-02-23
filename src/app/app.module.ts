import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {LandingComponent} from './views/landing/landing.component';
import {CalenderComponent} from './features/calender/calender.component';
import { DatePickerModule } from 'ng2-datepicker';
import {NavigationComponent} from './features/nav/navagation.component';
import {BoxComponent} from './features/box/box.component';
import {ButtonDrop} from './features/ButtonDrop/ButtonDrop.component';
import {FormComponent} from './features/form/form.component';
import {ObjectKeyValuesPipe} from './utils/pipes/ObjectKeyValuesPipe';
import {ObjectKeysPipe} from './utils/pipes/ObjectKeysPipe';

import {AnimationsComponent} from './views/animations/animations.component';
import {OtherComponent} from './views/other/other.component';

import {AppRoutingModule} from './routing/app-routing.module'

@NgModule({
  declarations: [//the view classes that belong to this module
    AppComponent,//three view classes components, directives and pipes
    LandingComponent,
    CalenderComponent,
    LandingComponent,
    NavigationComponent,
    BoxComponent,
    ButtonDrop,
    FormComponent,
    ObjectKeyValuesPipe,
    ObjectKeysPipe,
    AnimationsComponent,
    OtherComponent
  ],
  imports: [
    AppRoutingModule,//RouterModule.forRoot(appRoutes),//for root in module and in features.... forChild
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule
  ],
  providers: [],//creators of services
  bootstrap: [AppComponent]// main application view. should only be root component that hosts over views
})
export class AppModule { }
