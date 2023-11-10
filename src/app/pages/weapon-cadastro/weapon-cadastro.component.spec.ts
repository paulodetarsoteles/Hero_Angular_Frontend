import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponCadastroComponent } from './weapon-cadastro.component';

describe('WeaponCadastroComponent', () => {
  let component: WeaponCadastroComponent;
  let fixture: ComponentFixture<WeaponCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponCadastroComponent]
    });
    fixture = TestBed.createComponent(WeaponCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
