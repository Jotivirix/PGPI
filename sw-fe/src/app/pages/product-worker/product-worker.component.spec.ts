import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWorkerComponent } from './product-worker.component';

describe('ProductWorkerComponent', () => {
  let component: ProductWorkerComponent;
  let fixture: ComponentFixture<ProductWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
