import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OrderList } from '../models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnChanges {

  @Input()
  order: OrderList | null = null

  @Input()
  email!: string

  total = 0

  ngOnChanges(changes: SimpleChanges): void {

    const o = changes['order'].currentValue as OrderList

    this.total = 0
    for(let ol of o?.lineItems)
    this.total += 1
  }
  
}
