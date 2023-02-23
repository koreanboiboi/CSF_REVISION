import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { PizzaService } from './pizza.service';
import { OrderComponent } from './components/order.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'order', component: OrderComponent},
  {path: '**' , redirectTo: '/', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent, MainComponent, OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],

  providers: [PizzaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
