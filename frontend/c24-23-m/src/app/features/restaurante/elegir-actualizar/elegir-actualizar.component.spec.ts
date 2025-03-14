import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirActualizarComponent } from './elegir-actualizar.component';

describe('ElegirActualizarComponent', () => {
  let component: ElegirActualizarComponent;
  let fixture: ComponentFixture<ElegirActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElegirActualizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElegirActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
