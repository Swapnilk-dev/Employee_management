import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../services/employee.model';

@Component({
    selector: 'app-employee-create',
    templateUrl: './employee-create.component.html',
    styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
    employeeForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private employeeService: EmployeeService,
        private router: Router
    ) {
        this.employeeForm = this.fb.group({
            name: ['', Validators.required],
            position: ['', Validators.required],
            department: ['', Validators.required],
            salary: ['', Validators.required]
        });
    }

    onSubmit(): void {
        if (this.employeeForm.valid) {
            const newEmployee: Employee = this.employeeForm.value;
            this.employeeService.createEmployee(newEmployee).subscribe(() => {
                this.router.navigate(['/employees']);
            });
        }
    }
}
