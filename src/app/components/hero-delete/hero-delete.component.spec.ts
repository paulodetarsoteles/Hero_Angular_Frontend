import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDeleteComponent } from './hero-delete.component';

describe('HeroDeleteComponent', () => {
  let component: HeroDeleteComponent;
  let fixture: ComponentFixture<HeroDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDeleteComponent]
    });
    fixture = TestBed.createComponent(HeroDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
