import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = environment.ApiUrl;

  constructor(private http: HttpClient) { }

  GetMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/GetMovies`);
  }

  GetMovieById(id: Number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/GetMovieById/${id}`);
  }

  CreateMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiUrl}/CreateMovie`, movie);
  }

  UpdateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/UpdateMovie`, movie);
  }
}
