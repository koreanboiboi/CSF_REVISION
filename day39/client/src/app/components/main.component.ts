import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models';
import { PostService } from '../post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('image')
  image!: ElementRef

  form!: FormGroup

  constructor(private fb: FormBuilder, private postSvc: PostService){}


  ngOnInit(): void {
      this.form = this.createForm()
  }

  processForm(){
    const post = this.form.value as Post
    post.image = this.image.nativeElement.files[0]

    console.info('>>> POST: ', post)

    this.postSvc.postComment(post).then(response => {
      this.form = this.createForm()
      console.info(`Post Id: ${response.postId} ` )
    }).catch(error => {
      console.error('error: ',error)
    })


  }

  private createForm():FormGroup {
    return this.fb.group({
      email: this.fb.control('',[Validators.required, Validators.email]),
      title: this.fb.control('',[Validators.required]),
      text: this.fb.control('' , [Validators.required, Validators.minLength(5)]),
      image: this.fb.control('',[Validators.required])
    })
  }
}
