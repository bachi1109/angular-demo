import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEmployeeComponent } from './components/dashbord/dashboard-employee/dashboard-employee.component';
import { DashboardManagerComponent } from './components/dashbord/dashboard-manager/dashboard-manager.component';
import { DashboardMdComponent } from './components/dashbord/dashboard-md/dashboard-md.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { MyFirstComponent } from './components/my-first/my-first.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  { path: 'xyz123', redirectTo: 'MyFirstCompnentpath', pathMatch: 'full' },
  {
    path: 'MyFirstCompnentpath/:id',
    component: MyFirstComponent,
    title:"My First"
    
  },
  {
    path: 'Students',
    component: StudentsComponent,
    title:"My First"
    
  },
  {
    path: 'StudentDetails/:stid',
    component: StudentDetailsComponent,
    title:"My First"
    
  },
  {
    path: 'dashboard',
    component: DashbordComponent,
    title:"My First",
    children:[
      {
      path: 'MD',
      component: DashboardMdComponent,
      title:"My First" 
    },
    {
      path: 'Manager',
      component: DashboardManagerComponent,
      title:"My Maneger"
    },
    {
      path: 'employee',
      component: DashboardEmployeeComponent,
      title:"My Maneger"
    },
  ]
    
  },
  {
    path: '',
    component: DashbordComponent,
    title:"My First"
    
  },
  {
    path: '**',
    component: PageNotfoundComponent,
    title:"My First"
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
