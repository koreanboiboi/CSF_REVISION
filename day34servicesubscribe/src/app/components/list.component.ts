import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { FriendsService } from '../friends.service';
import { User } from '../model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges,OnDestroy {

  @Input()
  friends: User[] = []
  
  @Input()
  name='not set'
  
  friends$!: Subscription

  count = 0

  constructor(private friendSvc: FriendsService) {}

  ngOnInit(): void {
      this.friends$ = this.friendSvc.friends.subscribe(
        (data: User) => {
          console.info('from listcompo friendSvc:',data)
        }
      )
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.info('onChanges',changes)
      this.count = changes['friends'].currentValue.length
  }

  ngOnDestroy(): void {
      this.friends$.unsubscribe
  }

}
