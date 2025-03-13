import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosRepartidorComponent } from './pedidos-repartidor.component';

describe('PedidosRepartidorComponent', () => {
  let component: PedidosRepartidorComponent;
  let fixture: ComponentFixture<PedidosRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosRepartidorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
