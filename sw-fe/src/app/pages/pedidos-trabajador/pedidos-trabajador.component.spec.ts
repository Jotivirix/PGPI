import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosTrabajadorComponent } from './pedidos-trabajador.component';

describe('PedidosTrabajadorComponent', () => {
  let component: PedidosTrabajadorComponent;
  let fixture: ComponentFixture<PedidosTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosTrabajadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
