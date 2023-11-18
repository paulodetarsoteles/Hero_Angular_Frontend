import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponEditarComponent } from './weapon-editar.component';

describe('WeaponEditarComponent', () => {
  let component: WeaponEditarComponent;
  let fixture: ComponentFixture<WeaponEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponEditarComponent]
    });
    fixture = TestBed.createComponent(WeaponEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
