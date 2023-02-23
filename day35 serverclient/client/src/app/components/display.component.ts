import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BggService } from '../bgg.service';
import { Game } from '../models';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit,OnDestroy {

  games: Game[] = []

  sub$!: Subscription

  constructor(private bggSvc: BggService) {}

  ngOnDestroy(): void {
      this.sub$.unsubscribe()
  }

  ngOnInit(): void {
      this.sub$ = this.bggSvc.onSearchResult.subscribe(
        (games) => {
          this.games = games
        }
      )
  }

}
