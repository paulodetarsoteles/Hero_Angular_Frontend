import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieEditarComponent } from './movie-editar.component';

describe('MovieEditarComponent', () => {
  let component: MovieEditarComponent;
  let fixture: ComponentFixture<MovieEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieEditarComponent]
    });
    fixture = TestBed.createComponent(MovieEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
