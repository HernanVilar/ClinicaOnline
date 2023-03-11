import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloadminComponent } from './soloadmin.component';

describe('SoloadminComponent', () => {
  let component: SoloadminComponent;
  let fixture: ComponentFixture<SoloadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
