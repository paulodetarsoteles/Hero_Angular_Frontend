import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretEditarComponent } from './secret-editar.component';

describe('SecretEditarComponent', () => {
  let component: SecretEditarComponent;
  let fixture: ComponentFixture<SecretEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretEditarComponent]
    });
    fixture = TestBed.createComponent(SecretEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
