import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpBinService } from './http-bin.service';
import { UserData } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data!: UserData
  form!: FormGroup

  constructor(private http: HttpClient, private fb:FormBuilder
    ,private httpBinSvc: HttpBinService){}


  ngOnInit(): void {
      this.form = this.fb.group({
        userId: this.fb.control('12345'),
        name: this.fb.control('fred'),
        email: this.fb.control('fred@gmail.com')
      })
  }

  doPostAsForm() {
    const formdata: UserData = this.form.value
    this.httpBinSvc.doPostAsForm(formdata)
    .then(result => {
      console.info('result: ', formdata)
      this.data= result
    })
    .catch(e => {
      console.error('error msg: ',e)
    })
  }

  doPost(){
    const formdata: UserData = this.form.value
    this.httpBinSvc.doPost(formdata)
    .then(result => {
      console.info('result: ',formdata)
      this.data =result
    })
    .catch(e => {
      console.error('error:'),e
    })
  }

  processForm(){
    const formData: UserData = this.form.value
    this.httpBinSvc.doGet(formData)
    .then(result => {
      console.info('>>> then result')
      this.data = result
    })
    .catch(error => {
      console.error('error: ',error)
      this.data = error
    })
    .finally(() => {
      console.info('finally ngOninit')
      this.ngOnInit()
    })
  }

}
