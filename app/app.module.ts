import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeFormComponent,
    EmployeeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
