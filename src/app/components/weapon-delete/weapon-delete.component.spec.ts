import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponDeleteComponent } from './weapon-delete.component';

describe('WeaponDeleteComponent', () => {
  let component: WeaponDeleteComponent;
  let fixture: ComponentFixture<WeaponDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponDeleteComponent]
    });
    fixture = TestBed.createComponent(WeaponDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
