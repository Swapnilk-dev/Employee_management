import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
// import { Employee } from '../../service/employee.model';
import { Employee } from '../../services/employee.model';

@Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
    employeeForm: FormGroup;
    id!: number;

    constructor(
        private route: ActivatedRoute,
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

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.employeeService.getEmployeeById(this.id).subscribe(data => {
            this.employeeForm.patchValue(data);
        });
    }

    onSubmit(): void {
        if (this.employeeForm.valid) {
            const updatedEmployee: Employee = this.employeeForm.value;
            this.employeeService.updateEmployee(this.id, updatedEmployee).subscribe(() => {
                this.router.navigate(['/employees']);
            });
        }
    }
}
