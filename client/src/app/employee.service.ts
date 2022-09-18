import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [];
  employee?: Employee;


  constructor(private http: HttpClient) { }

  getEmployees() {
    this.http.get<Employee[]>("http://localhost:8080/employees").subscribe((response) => {
      this.employees = response;
    });
  }

  setEmployee(employee: Employee) {
    this.employee = employee;
  }

  deleteEmployee(id: number) {
    this.http.delete("http://localhost:8080/employees/"+id).subscribe(() => {
      this.employees = this.employees.filter((item) => {
        return item.id !== id;
      })
      this.employee = undefined;
    })
  }
}
