import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserDetailsComponent } from './components/user-details.component';
import { UserDetail } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  users: UserDetail [] = []

  newName!: string
  @ViewChild(UserDetailsComponent)
  userDetail!: UserDetailsComponent

  @ViewChild('h2')
  h2!: ElementRef

  ngOnInit(): void {
    console.info('>>> ngOnInit userDetail: ', this.userDetail)
  }
  ngAfterViewInit(): void {
    console.info('>>> ngAfterViewInit userDetail: ', this.userDetail)
    console.info('>>> ngAfterViewInit h2: ', this.h2)
  }
  
  process(userDetail: UserDetail) {
    console.info('>>> appcomponent: ',userDetail)
    this.newName= userDetail.name
    this.users = [ ...this.users, userDetail]
  }

  deleteUser() {
    console.info('deleting user')
    const user = this.userDetail.getFormValue()
    this.h2.nativeElement.innerText = user.name
    console.info('form value: ', user)

  }
  updateUser() {
    console.info('updating user')
  }
}
