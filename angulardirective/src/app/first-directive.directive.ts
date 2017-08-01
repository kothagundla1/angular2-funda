import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective {

  constructor() { }

  @HostBinding() innerText = `I am a directvie!`

}
