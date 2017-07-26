import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{message}}
      <input #myInput [(ngModel)]="message"> 
      <button (click)="update.emit({text : message})"> Click me! </button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }


  @Input()  message;

  @Output() update = new EventEmitter();



}
