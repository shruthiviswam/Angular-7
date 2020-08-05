import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import { CourseComponent } from './course/course.component'
import { SqrtPipe } from './squareroot.pipe';
import { SummaryPipe } from './summary.pipe';
import { TitlecasePipe } from './titlecase.pipe';
import { ChildComponent } from './child/child.component';
import { MyFormComponent } from './my-form/my-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SqrtPipe,
    SummaryPipe,
    TitlecasePipe,
    ChildComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
