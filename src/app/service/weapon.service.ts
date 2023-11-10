import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Weapon } from '../models/Weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  private apiUrl = `${environment.ApiUrl}/GetWeapons`;

  constructor(private http: HttpClient) { }

  GetWeapons(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(this.apiUrl);
  }
}
