import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {GMapModule} from 'primeng/gmap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Glass';
  clicks = 0;

  count() {
    this.clicks++;
  }
}
export class MyModel {


}
