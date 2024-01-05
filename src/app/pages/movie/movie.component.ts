import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movies: Movie[] = [];
  moviesGeral: Movie[] = [];
  columns: String[] = ["Código", "Nome", "Nota", "Opções"];

  constructor(private movieService: MovieService){ }

  ngOnInit(): void{
    this.movieService.GetMovies().subscribe(data => {
      this.movies = data;
      this.moviesGeral = data;
    });
  }

  searchMovie(event: Event): void {
    const value = (event.target as HTMLInputElement).value.toLowerCase();

    this.movies = this.moviesGeral.filter(movie => {
      return movie.name.toLowerCase().includes(value);
    });
  }
}
