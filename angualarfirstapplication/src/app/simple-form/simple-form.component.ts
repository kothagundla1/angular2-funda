import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{message}}
      <input #myInput> 
      <button (mouseover)="onClick($event, myInput.value) "> Click me</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()  message;
  onClick(event,value){
    console.log(event);
    console.log(value);
  }

}
