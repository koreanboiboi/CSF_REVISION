import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayComponent } from './components/display.component';
import { SearchComponent } from './components/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { BggService } from './bgg.service';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule

  ],
  providers: [BggService],
  bootstrap: [AppComponent]
})
export class AppModule { }
