import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[];

  selectedEmployeeCountRadioButton : string ="All";

  constructor() {
    this.employees = [
      {
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '06/25/1988'
      },
      {
        code: 'emp102', name: 'Alex', gender: 'Male',
        annualSalary: 5700.95, dateOfBirth: '09/06/1982'
      },
      {
        code: 'emp103', name: 'Mike', gender: 'Male',
        annualSalary: 5900, dateOfBirth: '08/12/1979'
      },
      {
        code: 'emp104', name: 'Mary', gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '10/14/1980'
      },
      {
        code: 'emp105', name: 'Nancy', gender: 'Female',
        annualSalary: 6700.826, dateOfBirth: '12/12/1982'
      },
    ];
  }

getTotalEmployeeCount(): number{
    return this.employees.length;

}
getTotalMaleEmployeeCount():number{
    return this.employees.filter(e=> e.gender ==='Male').length;

}
  getTotalFemaleEmployeeCount():number{
    return this.employees.filter(e=> e.gender ==='Female').length;

  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }

  ngOnInit() {
  }


}
