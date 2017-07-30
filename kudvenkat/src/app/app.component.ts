import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  pageHeader: string = 'Employee Header';
  isDisabled : boolean = false;
  badHtml: string = 'Hi <script> alert("Hacked") </script> world'
}
