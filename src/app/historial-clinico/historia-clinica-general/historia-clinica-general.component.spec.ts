import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaClinicaGeneralComponent } from './historia-clinica-general.component';

describe('HistoriaClinicaGeneralComponent', () => {
  let component: HistoriaClinicaGeneralComponent;
  let fixture: ComponentFixture<HistoriaClinicaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaClinicaGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaClinicaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
