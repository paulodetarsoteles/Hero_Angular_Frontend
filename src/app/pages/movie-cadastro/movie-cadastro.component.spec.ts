import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCadastroComponent } from './movie-cadastro.component';

describe('MovieCadastroComponent', () => {
  let component: MovieCadastroComponent;
  let fixture: ComponentFixture<MovieCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCadastroComponent]
    });
    fixture = TestBed.createComponent(MovieCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
