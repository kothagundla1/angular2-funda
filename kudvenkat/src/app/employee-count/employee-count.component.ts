import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
  @Input()
  all: number;
  @Input()
  male: number;
  @Input()
  female: number;

  selectedRadioButtonValue : string = "ALL";

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();


  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged
      .emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }
  constructor() { }

  ngOnInit() {
  }

}
