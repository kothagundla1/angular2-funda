import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BasicComponentComponent } from './basic-component/basic-component.component';
import { FirstDirectiveDirective } from './first-directive.directive';
import { TrackDirective } from './track.directive';
import {TrackingService} from './tracking.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponentComponent,
    FirstDirectiveDirective,
    TrackDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ TrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
