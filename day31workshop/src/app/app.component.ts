import { Component } from '@angular/core';
import { MyImage } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31workshop';


  images = [
    "/assets/logo.jpeg",
    "/assets/polar_bear.webp"
  ]

  
}
