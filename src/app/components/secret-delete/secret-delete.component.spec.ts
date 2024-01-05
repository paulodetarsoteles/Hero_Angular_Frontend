import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretDeleteComponent } from './secret-delete.component';

describe('SecretDeleteComponent', () => {
  let component: SecretDeleteComponent;
  let fixture: ComponentFixture<SecretDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretDeleteComponent]
    });
    fixture = TestBed.createComponent(SecretDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
