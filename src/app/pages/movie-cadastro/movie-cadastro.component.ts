import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-cadastro',
  templateUrl: './movie-cadastro.component.html',
  styleUrls: ['./movie-cadastro.component.css']
})
export class MovieCadastroComponent {

  constructor(private movieService: MovieService, private router: Router){ }

  createMovie(movie: Movie): void {
    this.movieService.CreateMovie(movie).subscribe((data) => {
      this.router.navigate(['/movie'])
    });
  }
}
