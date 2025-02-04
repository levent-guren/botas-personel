import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelDetayComponent } from './personel-detay.component';

describe('PersonelDetayComponent', () => {
  let component: PersonelDetayComponent;
  let fixture: ComponentFixture<PersonelDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonelDetayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonelDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
