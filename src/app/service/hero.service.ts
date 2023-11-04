import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/Hero';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private apiUrl = `${environment.ApiUrl}/GetHeroes`;

  constructor(private http: HttpClient) {}

  GetHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }

}
