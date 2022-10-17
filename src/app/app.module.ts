import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './components/my-first/my-first.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { DashboardManagerComponent } from './components/dashbord/dashboard-manager/dashboard-manager.component';
import { DashboardEmployeeComponent } from './components/dashbord/dashboard-employee/dashboard-employee.component';
import { DashboardMdComponent } from './components/dashbord/dashboard-md/dashboard-md.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    DashbordComponent,
    PageNotfoundComponent,
    DashboardManagerComponent,
    DashboardEmployeeComponent,
    DashboardMdComponent,
    StudentsComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
