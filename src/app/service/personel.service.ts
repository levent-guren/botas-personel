import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personel } from '../beans/personel';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  constructor(private http: HttpClient) { }
  public getPersoneller() {
    return this.http.get<Personel[]>('http://localhost:8080');
  }
}
