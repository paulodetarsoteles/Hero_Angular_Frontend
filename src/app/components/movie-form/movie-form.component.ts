import { Component, EventEmitter, Output } from '@angular/core';
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

  heroes: Hero[] = [];
  movieForm!: FormGroup;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.movieForm = new FormGroup({
      name: new FormControl(
        '', Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30)
        ])
      ),
      rate: new FormControl(7, [Validators.required])
    });

    this.heroService.GetHeroes().subscribe(data => {
      this.heroes = data;
    });
  }

  submit(): void {
    this.onSubmit.emit(this.movieForm.value);
  }
}
