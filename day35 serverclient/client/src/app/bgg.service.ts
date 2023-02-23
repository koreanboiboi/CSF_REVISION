import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Subject } from 'rxjs';
import { Game } from './models';


const BACKEND = 'http://localhost:8080'

@Injectable()
export class BggService {

  onSearchResult = new Subject<Game[]>()
  onSearchQuery = new Subject<string>()

  constructor( private http: HttpClient) { }

  searchGameByName(name: string):Promise<Game[]>{
    this.onSearchQuery.next(name)
    const params = new HttpParams().set("name", name)
    return firstValueFrom(
      this.http.get<Game[]>(`${BACKEND}/api/games`,{params})
    ).then(result => {
      this.onSearchResult.next(result)
      return result
    })
  }
}
