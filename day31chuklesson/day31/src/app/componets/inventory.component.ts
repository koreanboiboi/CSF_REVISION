import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { INVENTORIES } from '../constants';
import { CustomerSelection, Inventory } from '../models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  @Output()
  // onSelection: CustomerSelection[] = []
  onSelection = new Subject<CustomerSelection>()

  quantity = 0

  inventories: Inventory[] = INVENTORIES

  selected(name: string) {
    const selection = {
      name, quantity: this.quantity
    } as CustomerSelection
    console.info('selected(name: string) triggered')
    this.onSelection.next(selection)
    console.info('Inventories Array', this.inventories)

  }

  addTo(i:number) {
    this.quantity +=i
    console.info('addTo()')
  }
}
