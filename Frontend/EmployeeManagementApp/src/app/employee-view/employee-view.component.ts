import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.css'
})
export class EmployeeViewComponent {
  employeeId!:any;
  employee!:any;
  errors:any=[];

  constructor(private route: ActivatedRoute,private employeeService:EmployeeServiceService) {}

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
}
