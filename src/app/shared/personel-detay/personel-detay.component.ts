import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-personel-detay',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './personel-detay.component.html',
  styleUrl: './personel-detay.component.scss'
})
export class PersonelDetayComponent {
  form: FormGroup;
  @Output('arama') arama = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      personelID: [''],
      personelAdi: '',
      personelSoyadi: '',
    });
  }
  ara() {
    this.arama.emit(this.form.value);
  }
}
