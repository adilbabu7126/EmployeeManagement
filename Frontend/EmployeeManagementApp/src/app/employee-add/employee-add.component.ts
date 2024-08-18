import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';


@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {
  name!:string
  position!:string
  department!:string
  salary!:string
  errors:any=[];

  constructor(private employeeService: EmployeeServiceService) {}

  addEmployee(){
    var inputData = {
      name:this.name,
      position:this.position,
      department:this.department,
      salary:this.salary,
    }
    this.employeeService.addEmployee(inputData).subscribe({
      next: (res: any) => {
        console.log(res,'response');
        alert('Added Successfully');
        this.name = '';
        this.department = '';
        this.position = '';
        this.salary = '';
        // Handle success
      },
      error: (err: any) => {
        this.errors = err.error?.errors ?? [];
        console.log(err,'Error');
        alert("Status:"+err.status+"("+err.statusText+")");
        // Handle error
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }
}
