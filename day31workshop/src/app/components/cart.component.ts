import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import {  MyImage } from '../model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  imageURL = ""

  @Input()
  counts = 0

  @Output()
  addCart = new Subject<MyImage>()

  
  add(){
    console.info("add button clicked", this.imageURL, this.counts,"times")

    const img: MyImage = {
      item: this.imageURL,
      count: 1+this.counts++
    }
    this.addCart.next(img)
  }

}
