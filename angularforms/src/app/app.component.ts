import {Component, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/filter";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formRef') form;
  name = 'hari';
  onSubmit(formValue){
    console.log(formValue);
  };
  ngAfterViewInit(){
    Observable.combineLatest(
      this.form.statusChanges,
      this.form.valueChanges,
      (status, value) => ({status, value})
    )
      .filter(({status}) => status === 'VALID' )
      .subscribe(({value}) => console.table(value));
  }
}
