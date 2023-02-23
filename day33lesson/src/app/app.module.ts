import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FriendsListComponent } from './components/friends-list.component';
import { UserDetailsComponent } from './components/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
