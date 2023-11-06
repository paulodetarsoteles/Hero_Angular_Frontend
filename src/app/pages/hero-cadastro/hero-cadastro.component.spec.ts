import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCadastroComponent } from './hero-cadastro.component';

describe('HeroCadastroComponent', () => {
  let component: HeroCadastroComponent;
  let fixture: ComponentFixture<HeroCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroCadastroComponent]
    });
    fixture = TestBed.createComponent(HeroCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
