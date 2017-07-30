import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
classesToApply: string = 'italicsClass boldClass';
  applyBoldClass: boolean = true;
  applyColorClass: boolean = true;
  addClasses(){
    let classes = {
      boldClass : this.applyBoldClass,
      colorClass : this.applyColorClass

    };
    return classes;
  }

}
