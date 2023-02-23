import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details.component';
import { MasterComponent } from './components/master.component';

import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: MasterComponent},
  {path: 'book/:bookId', component:DetailsComponent},
  {path: '**' , redirectTo: '/', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
