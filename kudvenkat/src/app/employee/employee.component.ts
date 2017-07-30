import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  columnSpan: number = 2;
  firstName : string = 'Hari';
  lastName : string = 'Krishna';
  gender : string = 'Male';
  age : string = '24';
  showDetails: boolean = false;

toggleDetails(): void{
  this.showDetails = !this.showDetails;

}
}
