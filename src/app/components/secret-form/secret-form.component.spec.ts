import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretFormComponent } from './secret-form.component';

describe('SecretFormComponent', () => {
  let component: SecretFormComponent;
  let fixture: ComponentFixture<SecretFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretFormComponent]
    });
    fixture = TestBed.createComponent(SecretFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
