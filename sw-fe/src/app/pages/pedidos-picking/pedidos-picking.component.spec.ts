import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosPickingComponent } from './pedidos-picking.component';

describe('PedidosPickingComponent', () => {
  let component: PedidosPickingComponent;
  let fixture: ComponentFixture<PedidosPickingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosPickingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosPickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
