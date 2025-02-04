import { Component } from '@angular/core';
import { PersonelDetayComponent } from "../../shared/personel-detay/personel-detay.component";
import { PersonelListeComponent } from "../../shared/personel-liste/personel-liste.component";

@Component({
  selector: 'app-personel-kayit',
  imports: [PersonelDetayComponent, PersonelListeComponent],
  templateUrl: './personel-kayit.component.html',
  styleUrl: './personel-kayit.component.scss'
})
export class PersonelKayitComponent {
  aramaKriteri = "";
  arama(val: any) {
    console.log('PersonelKayit componentine ', val, ' degeri arama olarak geldi');
  }
}
