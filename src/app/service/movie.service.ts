import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = `${environment.ApiUrl}/GetMovies`;

  constructor(private http: HttpClient) { }

  GetMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }
}
