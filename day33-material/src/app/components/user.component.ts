import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from '../model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  @Output()
  onNewUser = new Subject<User>()

  form!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
      this.form = this.createForm()
  }

  processForm() {
    this.onNewUser.next(this.value())
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('', [ Validators.required, Validators.minLength(3)] ),
      email: this.fb.control<string>('', [ Validators.required, Validators.email] ),
      phone: this.fb.control<string>('', [ Validators.required, Validators.minLength(8) ] ),
      dob: this.fb.control<Date>(new Date(), [ Validators.required ] ),
    })
  }

  clearForm(){
    this.form = this.createForm()
  }

  value(){
      return this.form.value as User
  }
}
