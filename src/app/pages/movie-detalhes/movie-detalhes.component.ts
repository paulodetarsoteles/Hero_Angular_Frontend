import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-detalhes',
  templateUrl: './movie-detalhes.component.html',
  styleUrls: ['./movie-detalhes.component.css']
})
export class MovieDetalhesComponent {

  movie?: Movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.GetMovieById(id).subscribe((data) => {
      this.movie = data;
    });
  }
}
