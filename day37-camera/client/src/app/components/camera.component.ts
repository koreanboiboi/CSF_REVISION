import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamComponent, WebcamImage } from 'ngx-webcam';
import { Subject, Subscription } from 'rxjs';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit, OnDestroy, AfterViewInit {


  @ViewChild(WebcamComponent)
  webcam!: WebcamComponent
  trigger = new Subject<void>()
  sub$!: Subscription
  pics: string[] =[]

  width = 400
  height = 400

  constructor(private router:Router , private cameraSvc: CameraService){}

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
      console.info('afterviewinit',this.webcam)

      this.webcam.trigger = this.trigger
      this.webcam.width = 100
      this.webcam.height = 100
      
      this.sub$ = this.webcam.imageCapture.subscribe(this.snapshot.bind(this))
  }

  snap(){
    this.trigger.next()
  }

  snapshot(img: WebcamImage){
    console.info('imgAsBase64: ', img.imageAsBase64)
    console.info('imgAsDataUrl: ', img.imageAsDataUrl)
    console.info('imgData: ', img.imageData)

    this.cameraSvc.imageData = img.imageAsDataUrl
    this.pics.push(img.imageAsDataUrl)
  }

  ngOnInit(): void {
    console.info('>>> oninit' , this.webcam)
  }
}
