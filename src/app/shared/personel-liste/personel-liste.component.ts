import { Component, Input } from '@angular/core';
import { Personel } from '../../beans/personel';
import { PersonelService } from '../../service/personel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-personel-liste',
  imports: [],
  templateUrl: './personel-liste.component.html',
  styleUrl: './personel-liste.component.scss'
})
export class PersonelListeComponent {
  public personeller: Personel[] = [];

  private _aramaKriteri = '';

  @Input()
  get aramaKriteri(): string { return this._aramaKriteri }
  set aramaKriteri(value: string) {
    this._aramaKriteri = value;
    this.listeyiGuncelle();
  }

  constructor(
    private personelService: PersonelService,
    private toastr: ToastrService,
  ) { }

  listeyiGuncelle() {
    this.personelService.getPersoneller().subscribe({
      next: (data) => {
        this.personeller = data;
      },
      error: (error) => {
        this.toastr.error('Personel bilgileri alınamadı');
      }
    });
  }

}
