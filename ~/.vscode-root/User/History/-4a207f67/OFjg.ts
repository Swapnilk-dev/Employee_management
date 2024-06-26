import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    totalEmployees: number = 0;
    totalSalary: number = 0;

    constructor(private employeeService: EmployeeService) {}

    ngOnInit(): void {
        this.loadAnalytics();
    }

    loadAnalytics(): void {
        this.employeeService.getEmployees().subscribe(employees => {
            this.totalEmployees = employees.length;
            this.totalSalary = employees.reduce((sum, employee) => sum + Number(employee.salary)6, 0);
        });
    }
}
