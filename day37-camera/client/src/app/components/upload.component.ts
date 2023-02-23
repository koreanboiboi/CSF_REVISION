import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{

  imageData=''
  complainForm! : FormGroup
  blob!: Blob

  constructor(private router:Router, private fb:FormBuilder,
     public camSvc: CameraService){}

  ngOnInit(): void {
      if(!this.camSvc.imageData){
        this.router.navigate(['/'])
        return
      }
      this.imageData = this.camSvc.imageData
      this.complainForm = this.fb.group({
        title: this.fb.control<string>(''),
        complain: this.fb.control<string>(''),
      })
      this.blob = this.dataURItoBlob(this.imageData)
      console.info('blob>>>',this.blob)
  }
  dataURItoBlob(dataURI: string) {
    var byteString = atob(dataURI.split(',')[1])
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    var ab = new ArrayBuffer(byteString.length)
    var ia = new Uint8Array(ab)
    for(var i = 0; i<byteString.length; i++){
      ia[i] = byteString.charCodeAt(i)
      console.info('ab',ab)
      console.info('ia',ia)
      console.info('ia[i]',ia[i])
    }
    return new Blob([ab], {type:mimeString})
  }

  upload(){
    const value = this.complainForm.value
    console.info('value' ,value)
    this.camSvc.upload(value,this.blob)
    .then( result => {
      console.info('key: ', result.imageKey)
      this.router.navigate(['/'])
    })
    .catch(error => {
      console.error('error>>',error)
    })
  }

}
