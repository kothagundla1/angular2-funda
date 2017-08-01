import {Directive, HostListener, Input} from '@angular/core';
import {TrackingService} from './tracking.service'

@Directive({
  selector: '[appTrack]'
})
export class TrackDirective {

  @Input() appTrack

  @HostListener('click')
  onClick(){
    this.tracking.log({event:'click', message:this.appTrack})
  }
  @HostListener('mouseover')
  onMouseover(){
    this.tracking.log({event:'mouseover', message:this.appTrack})
  }

  constructor( private tracking: TrackingService) { }

}
