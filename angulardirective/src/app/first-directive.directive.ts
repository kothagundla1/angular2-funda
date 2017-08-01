import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective {

  constructor() { }

  @Input() appFirstDirective;

  @HostBinding() get innerText(){
    return this.appFirstDirective
  }

  @HostListener('click',['$event']) onClick($event){
    this.appFirstDirective ='clicked'
  }
}
