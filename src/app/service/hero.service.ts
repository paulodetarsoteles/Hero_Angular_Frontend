import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Hero } from '../models/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private apiUrl = environment.ApiUrl;

  constructor(private http: HttpClient) { }

  GetHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiUrl}/GetHeroes`);
  }

  GetHeroById(id: Number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}/GetHeroById/${id}`);
  }

  CreateHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.apiUrl}/CreateHero`, hero);
  }
}
