import { Component } from '@angular/core';
import { CustomerSelection } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  content: CustomerSelection[] = []

  selected (selection: CustomerSelection) {
    console.info('>>> app.component selected ' , selection)
    console.info('selected (selection: CustomerSelection)')

    this.content.push(selection)
  }

  deleteItem(i: number) {
    this.content.splice(i,1)
    console.info('deleteItem()')
  }
  
}
