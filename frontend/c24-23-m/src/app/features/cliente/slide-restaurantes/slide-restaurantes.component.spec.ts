import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideRestaurantesComponent } from './slide-restaurantes.component';

describe('SlideRestaurantesComponent', () => {
  let component: SlideRestaurantesComponent;
  let fixture: ComponentFixture<SlideRestaurantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideRestaurantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
