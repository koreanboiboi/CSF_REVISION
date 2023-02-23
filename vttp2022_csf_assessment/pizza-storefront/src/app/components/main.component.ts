import { Component, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Order } from '../models';
import { PizzaService } from '../pizza.service';

const SIZES: string[] = [
  "Personal - 6 inches",
  "Regular - 9 inches",
  "Large - 12 inches",
  "Extra Large - 15 inches"
]

const PizzaToppings: string[] = [
    'chicken', 'seafood', 'beef', 'vegetables',
    'cheese', 'arugula', 'pineapple'
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {

  @Output()
  onNewOrder = new Subject<Order>()
  // @ViewChild('mainForm')
  mainForm!: FormGroup
  lineItems!: FormArray



  // toppingArray: []=[]

  

  // toppingArray=[]

  pizzaSize = SIZES[0]
  toppingArray!: FormArray

  constructor(private fb: FormBuilder, private pizzaSvc: PizzaService
    ,activatedRoute: ActivatedRoute) {
   
    // this.mainForm = this.fb.group({
    //   PizzaToppings: this.fb.array(['chicken', 'seafood', 'beef', 'vegetables',
    //   'cheese', 'arugula', 'pineapple']),
    //   SIZES: this.fb.array(["Personal - 6 inches",
    //   "Regular - 9 inches",
    //   "Large - 12 inches",
    //   "Extra Large - 15 inches"])
    // }),Validators.requiredTrue
  }

  ngOnInit(): void {

    this.mainForm = this.createForm()
    

  }

  updateSize(size: string) {
    this.pizzaSize = SIZES[parseInt(size)]
  }

  private createForm(): FormGroup {

    this.toppingArray = this.fb.array([],Validators.required)

    return this.fb.group({
      name: this.fb.control('' , [Validators.required]),
      email: this.fb.control('' , [Validators.required, Validators.email]),
      size: this.fb.control(this.pizzaSize,[Validators.required]),
      base: this.fb.control('', [Validators.required]),
      sauce: this.fb.control('', [Validators.required]),
      toppings: this.toppingArray,
      comments: this.fb.control('nil')


    })
  }

  processForm(){

    const order: Order = this.mainForm.value as Order
    this.onNewOrder.next(order)
    this.mainForm = this.createForm()

  }

  addLineItem(){
    this.lineItems.push(this.createLineItem())
  }

  private createLineItem(): FormGroup {
    return this.fb.group({
        id: this.fb.control<number>(1),
        price: this.fb.control<number>(1)
    })
  }

  ngOnChanges(event: any){
    if(event.target.checked) {
      this.toppingArray.push(this.fb.control(event.target.value))
    } else {
      let i: number =0
      this.toppingArray.controls.forEach((item:any)=>{
        if(item.value == event.target.value) {
          this.toppingArray.removeAt(i)
          return
        }
        i++
      })
    }
  }

}
