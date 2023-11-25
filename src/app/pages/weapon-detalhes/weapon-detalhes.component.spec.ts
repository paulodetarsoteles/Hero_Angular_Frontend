import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponDetalhesComponent } from './weapon-detalhes.component';

describe('WeaponDetalhesComponent', () => {
  let component: WeaponDetalhesComponent;
  let fixture: ComponentFixture<WeaponDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponDetalhesComponent]
    });
    fixture = TestBed.createComponent(WeaponDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
