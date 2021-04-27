import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaprovisionamientoComponent } from './reaprovisionamiento.component';

describe('ReaprovisionamientoComponent', () => {
  let component: ReaprovisionamientoComponent;
  let fixture: ComponentFixture<ReaprovisionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaprovisionamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaprovisionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
