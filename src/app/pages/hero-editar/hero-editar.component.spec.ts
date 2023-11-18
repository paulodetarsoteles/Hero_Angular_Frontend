import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEditarComponent } from './hero-editar.component';

describe('HeroEditarComponent', () => {
  let component: HeroEditarComponent;
  let fixture: ComponentFixture<HeroEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroEditarComponent]
    });
    fixture = TestBed.createComponent(HeroEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
