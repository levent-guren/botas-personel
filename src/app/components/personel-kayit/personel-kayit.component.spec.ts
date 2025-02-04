import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelKayitComponent } from './personel-kayit.component';

describe('PersonelKayitComponent', () => {
  let component: PersonelKayitComponent;
  let fixture: ComponentFixture<PersonelKayitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonelKayitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonelKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
