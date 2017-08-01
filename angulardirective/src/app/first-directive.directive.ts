import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective {

  constructor() { }

  @Input() appFirstDirective;

  @HostBinding() get innerText(){
    return this.appFirstDirective
  }

}
