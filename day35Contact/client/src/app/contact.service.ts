import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Contact } from './models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  saveContact(contact:Contact): Promise<Contact> {

    const payload = new HttpParams()
                      .set("name",contact.name)
                      .set("email",contact.email)
                      .set("phone",contact.phone)

    const headers = new HttpHeaders()
                    .set("Conte-Type","application/x-www-form-urlencoded")
                    .set("Accept","application/json")

                    return firstValueFrom(
                      this.http.post<Contact>('http://localhost:8080/contact'
                      ,payload.toString(), {headers})
                    )

  }
}
