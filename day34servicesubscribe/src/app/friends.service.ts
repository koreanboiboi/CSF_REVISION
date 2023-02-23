import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor() { }

  friends = new Subject<User>()
}
