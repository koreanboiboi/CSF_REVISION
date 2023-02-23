import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  form!: FormGroup
  lineItems!: FormArray
  order!: Order
  expressShipping= 'express'

  
  
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
      this.form = this.createForm()
  }

  private createForm(): FormGroup {
    this.lineItems = this.fb.array([])

    return this.fb.group({
      name: this.fb.control<string>('',[Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>('',[Validators.required, Validators.email]),
      express: this.fb.control<boolean>(true),
      lineItems: this.lineItems
    })
  }

  process(){

    this.order = this.form.value as Order
    console.info('form >>>:' , this.order) 

  }

  clearForm(){

    this.form = this.createForm()
    
  }

  public deleteItem(i: number){
    this.lineItems.removeAt(i)
  }

  public addItem(){
    this.lineItems.push(this.createLineItem())
  }

  private createLineItem(): FormGroup{

    return this.fb.group({
      item: this.fb.control<string>('', [Validators.required]),
      quantity: this.fb.control<number>
      (1, [Validators.required , Validators.min(1), Validators.max(10)])
    })
  }

  
}
