import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{message}}
      <input #myInput [(ngModel)]="message"> 
      <button (mouseover)="onClick($event, myInput.value) "> Click me</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor() {
    setInterval (() => this.message = Math.random().toString(), 1500)
  }

  ngOnInit() {
  }

  @Input()  message;
  onClick(event,value){
    console.log(event);
    console.log(value);
  }

}
