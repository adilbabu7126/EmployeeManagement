import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule,Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent {
  employeeId!:any;
  employee!:any;
  errors:any=[];

  constructor(private router: Router,private route: ActivatedRoute, private employeeService:EmployeeServiceService) {}

  ngOnInit(){
    this.employeeId = this.route.snapshot.paramMap.get('id')!;
    this.employeeService.getEmployeeById(this.employeeId).subscribe({
      next: (res: any) => {
       console.log(res,'response');
        this.employee = res;
      },
      error: (err: any) => {
        this.errors = err.error?.errors ?? [];
        console.log(err,'Error');
        // Handle error
      }
    })
  }
  updateEmployee(){
    var inputData = {
      id:this.employeeId,
      name:this.employee.name,
      position:this.employee.position,
      department:this.employee.department,
      salary:this.employee.salary,
    }
    this.employeeService.updateEmployee(inputData, this.employeeId).subscribe({
      next: (res: any) => {
        console.log(res,'response');
        alert('Updated Successfully');
        this.router.navigate(['/Employee']);
        
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
