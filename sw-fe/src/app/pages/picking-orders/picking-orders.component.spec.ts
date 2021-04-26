import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickingOrdersComponent } from './picking-orders.component';

describe('PickingOrdersComponent', () => {
  let component: PickingOrdersComponent;
  let fixture: ComponentFixture<PickingOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickingOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
