import { Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

export const routes: Routes = [
    {path:'Employee', component:EmployeeListComponent, title:'Employee List'},
    {path:'Employee/Create', component:EmployeeAddComponent, title:'Add Employee'},
    {path:'Employee/Edit/:id', component:EmployeeEditComponent, title:'Edit Employee'},
    {path:'Employee/View/:id', component:EmployeeViewComponent, title:'View Employee'}
];
