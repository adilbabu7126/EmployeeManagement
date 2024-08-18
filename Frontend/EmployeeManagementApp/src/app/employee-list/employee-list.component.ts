import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeServiceService,EmployeeDetails } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  constructor(private EmployeeService: EmployeeServiceService){}
  Employees!:EmployeeDetails[];

  ngOnInit(){
    this.getEmployeeDetails();
  }
  getEmployeeDetails(){
    this.EmployeeService.getEmployeeDetails().subscribe((res:any)=>{
      this.Employees = res;
    });
  }
  confirmDelete(event:any,employeeId:Number){
      if(confirm("Are you sure you want to delete this record?"))
      {
        event.target.innerText = "Deleting..";
        this.EmployeeService.deleteEmployee(employeeId).subscribe((res:any)=>{
          this.getEmployeeDetails();
          alert('Deleted Successfully');
        }
        )
      }
  }
}
