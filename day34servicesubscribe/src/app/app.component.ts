import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormComponent } from './components/form.component';
import { User } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  
  @ViewChild(FormComponent)
  formComp!: FormComponent

  friends: User[] = []
  name =''

  sub$!: Subscription

  onNewUser(data: User) {
    this.friends = [...this.friends, data]
    this.name = data.name
  }

  ngOnDestroy(): void {
      this.sub$.unsubscribe
  }

  ngAfterViewInit(): void {
      this.sub$ = this.formComp.onNewUser.subscribe(
        (data: User) => {
          this.onNewUser(data)
        }
      )
  }
}
