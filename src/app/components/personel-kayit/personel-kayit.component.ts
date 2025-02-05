import { Component } from '@angular/core';
import { PersonelDetayComponent } from "../../shared/personel-detay/personel-detay.component";
import { PersonelListeComponent } from "../../shared/personel-liste/personel-liste.component";
import { Personel } from '../../beans/personel';
import { PersonelAramaKriteri } from '../../beans/personel-arama-kriteri';

@Component({
  selector: 'app-personel-kayit',
  imports: [PersonelDetayComponent, PersonelListeComponent],
  templateUrl: './personel-kayit.component.html',
  styleUrl: './personel-kayit.component.scss'
})
export class PersonelKayitComponent {
  aramaKriteri: PersonelAramaKriteri = new PersonelAramaKriteri();
  arama(value: PersonelAramaKriteri) {
    this.aramaKriteri = value;
  }
}
