import {Component, Inject} from '@angular/core';
// import {MailService} from "./mail.service";

@Component({
  selector: 'app-root',
  template: `
  <div>
    <app-simple-form></app-simple-form>
    {{mail.message}}
    <hr>
    {{api}}
  </div>`,
})
export class AppComponent {
  title = 'this is the first app ' ;
  constructor(@Inject('mail') private mail,
              @Inject('api') private api){}
}
