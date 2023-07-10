


// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

// const routes: Routes = [
//   { path: '', component: EmployeeDashboardComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }




import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  { path: '', component: EmployeeDashboardComponent },
  { path: 'employee-form', component: EmployeeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
