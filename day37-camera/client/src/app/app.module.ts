import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraService } from './camera.service';
import { CameraComponent } from './components/camera.component';
import { UploadComponent } from './components/upload.component';

import {HttpClientModule } from '@angular/common/http';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    WebcamModule
  ],
  providers: [CameraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
