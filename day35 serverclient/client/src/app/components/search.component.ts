import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BggService } from '../bgg.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{


  searchForm!: FormGroup

  constructor(private fb: FormBuilder, private bggSvc: BggService) {}

  ngOnInit(): void {
      this.searchForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('',[Validators.required])
    })
  }

  doSearch() {
    const name = this.searchForm.get('name')?.value
    console.info('name',name)
    this.bggSvc.searchGameByName(name)
    .then(games=> {
      console.info('game',games)
      this.searchForm.reset()
    }).catch(error => {
      console.error('error',error)
    })
  }

}
