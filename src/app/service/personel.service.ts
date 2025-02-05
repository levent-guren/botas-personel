import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personel } from '../beans/personel';
import { PersonelAramaKriteri } from '../beans/personel-arama-kriteri';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  constructor(private http: HttpClient) { }
  public getPersoneller(kriter: PersonelAramaKriteri) {
    return this.http.post<Personel[]>(`${environment.apiUrl}/query`,
      {
        id: kriter.personelID, adi: kriter.personelAdi == '' ? null : this.camelize(kriter.personelAdi!.trim().toLocaleLowerCase()),
        soyadi: kriter.personelSoyadi == '' ? null : kriter.personelSoyadi!.trim().toUpperCase()
      });
  }
  camelize(metin: string) {
    return metin.split(" ").map(kelime => kelime[0].toUpperCase() + kelime.slice(1,)).join(" ");
  }
}
