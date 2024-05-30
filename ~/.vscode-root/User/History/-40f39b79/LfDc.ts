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
    searchText: string = '';

    constructor(private employeeService: EmployeeService) {}

    ngOnInit(): void {
        this.loadEmployees();
        // if (this.searchText.trim() !== '') {
        //     // If search field is not empty, call searchEmployee
        //     this.searchEmployee(this.searchText);
        // } else {
        //     // If search field is empty, call loadEmployees
        //     this.loadEmployees();
        // }
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
    // deleteAllEmployees(): void {
    //     this.employeeService.deleteAllEmployees().subscribe(() => {
    //         this.deleteAllEmployees()
    //     })
    // }
    deleteAllEmployees(): void {
        const confirmDelete = confirm("Are you sure you want to delete all records?");
        if (confirmDelete) {
            // If user clicks "OK", proceed with deletion
            this.employeeService.deleteAllEmployees().subscribe(() => {
              alert("All records deleted successfully.");
              this.ngOnInit();
            });
          } else {
            alert("Deletion cancelled by user.");
            // If user clicks "Cancel", do nothing
          }
    }
    onSearchInputChange(): void {
        const searchTextLower = this.searchText.trim().toLowerCase(); // Using the provided 'name' parameter
        this.employeeService.searchEmployeesByName(searchTextLower).subscribe(data => {
            this.employees = data;
            // this.ngOnInit();
        });
    }
    // onSearchInputChange(): void {
    //     if (this.searchText.trim() === '') {
    //         // If search field is empty, call loadEmployees
    //         this.loadEmployees();
    //     } else {
    //         // If search field is not empty, call searchEmployee
    //         this.employeeService.searchEmployeesByName(this.searchText);
    //     }
    // }
}
