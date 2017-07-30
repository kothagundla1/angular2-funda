import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    
      <input #myInput [(ngModel)]="message" [ngClass]="{mousedown:isMousedown}"
             (mousedown)="isMousedown = true"
             (mouseup)="isMousedown = false"
             (mouseleave)="isMousedown = false" > 
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

  .mousedown{
    border: 12px solid green;
  }
  button{
      border: none;
    } 
    
  `]

})
export class SimpleFormComponent implements OnInit {

  isMouseDown;

  constructor() {

  }

  ngOnInit() {
  }


  @Input()  message;

  @Output() update = new EventEmitter();



}
