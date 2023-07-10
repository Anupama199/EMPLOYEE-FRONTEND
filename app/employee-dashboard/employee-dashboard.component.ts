


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  employees: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.employees = data;
    });
  }
}
