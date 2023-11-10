import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretCadastroComponent } from './secret-cadastro.component';

describe('SecretCadastroComponent', () => {
  let component: SecretCadastroComponent;
  let fixture: ComponentFixture<SecretCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretCadastroComponent]
    });
    fixture = TestBed.createComponent(SecretCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
