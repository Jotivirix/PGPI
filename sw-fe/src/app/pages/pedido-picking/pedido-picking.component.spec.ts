import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoPickingComponent } from './pedido-picking.component';

describe('PedidoPickingComponent', () => {
  let component: PedidoPickingComponent;
  let fixture: ComponentFixture<PedidoPickingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoPickingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoPickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
