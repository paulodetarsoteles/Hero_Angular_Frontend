import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-editar',
  templateUrl: './movie-editar.component.html',
  styleUrls: ['./movie-editar.component.css']
})
export class MovieEditarComponent {

  btnAcao: string = 'Editar';
  btnTitulo: string = 'Editar informações';
  movie!: Movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.GetMovieById(id).subscribe((data) => {
      this.movie = data;
    })
  }
}
