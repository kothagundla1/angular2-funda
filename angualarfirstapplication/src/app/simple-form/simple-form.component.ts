import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    
      <input #myInput [(ngModel)]="message"> 
      <button (click)="update.emit({text : message})"> Click me! </button>

  `,
  styles: [`
  :host{
    display: flex;
    flex-direction: column;
  }
  input:focus{
    font-weight: bold;
  }
  
    button{
      border: none;
    } 
    
  `]

})
export class SimpleFormComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }


  @Input()  message;

  @Output() update = new EventEmitter();



}
