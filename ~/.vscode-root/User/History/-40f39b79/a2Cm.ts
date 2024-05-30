import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from '../services/employee.service';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../services/employee.model';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    employees: Employee[] = [];

    constructor(private employeeService: EmployeeService) {}

    ngOnInit(): void {
        this.loadEmployees();
    }

    loadEmployees(): void {
        this.employeeService.getEmployees().subscribe(data => {
            this.employees = data;
        });
    }

    deleteEmployee(id: number): void {
        this.employeeService.deleteEmployee(id).subscribe(() => {
            this.loadEmployees();
        });
    }
}
