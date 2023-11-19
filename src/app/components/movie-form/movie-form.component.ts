import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from 'src/app/models/Hero';
import { Movie } from 'src/app/models/Movie';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  @Output() onSubmit = new EventEmitter<Movie>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dados: Movie | null = null;

  heroes: Hero[] = [];
  movieForm!: FormGroup;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.movieForm = new FormGroup({
      name: new FormControl(this.dados ? this.dados.name : '',
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30)
        ])
      ),
      rate: new FormControl(this.dados ? this.dados.rate : 7,
        [Validators.required])
    });

    this.heroService.GetHeroes().subscribe(data => {
      this.heroes = data;
    });
  }

  submit(): void {
    this.onSubmit.emit(this.movieForm.value);
  }
}
