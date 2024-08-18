import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmployeeDetails{
  id: number,
  name: string,
  position: string,
  department: string,
  salary: number
}

@Injectable({
  providedIn: 'root'
})


export class EmployeeServiceService {
  private apiUrl = 'http://localhost:5228/api/employees';
  constructor(private http: HttpClient) { }

  getEmployeeDetails(){
    return this.http.get<any>(this.apiUrl);
  }
  getEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addEmployee(inputData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, inputData);
  }
  updateEmployee(inputData: any, id:number){
    return this.http.put<any>(`${this.apiUrl}/${id}`, inputData);
  }
  deleteEmployee(id:Number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
