import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { UserDetail } from '../model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  @Output()
  onUserDetail = new Subject<UserDetail>()

  constructor(private fb: FormBuilder) {}

  form!: FormGroup

  ngOnInit(): void {
      this.form = this.createForm()
  }

  private createForm(): FormGroup{
      return this.fb.group({
        name: this.fb.control(''),
        email: this.fb.control(''),
        comments: this.fb.control('')
      })
  }

  processForm(){

    const userDetail: UserDetail = this.form.value as UserDetail
    this.onUserDetail.next(userDetail)
    this.form = this.createForm()

  }
  
  getFormValue(): UserDetail {
    return this.form.value as UserDetail
  }
}
