import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretDetalhesComponent } from './secret-detalhes.component';

describe('SecretDetalhesComponent', () => {
  let component: SecretDetalhesComponent;
  let fixture: ComponentFixture<SecretDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretDetalhesComponent]
    });
    fixture = TestBed.createComponent(SecretDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
