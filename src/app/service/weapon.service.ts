import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Weapon } from '../models/Weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  private apiUrl = environment.ApiUrl;

  constructor(private http: HttpClient) { }

  GetWeapons(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(`${this.apiUrl}/GetWeapons`);
  }

  GetWeaponById(id: Number): Observable<Weapon> {
    return this.http.get<Weapon>(`${this.apiUrl}/GetWeaponById/${id}`);
  }

  CreateWeapon(weapon: Weapon): Observable<Weapon> {
    return this.http.post<Weapon>(`${this.apiUrl}/CreateWeapon`, weapon);
  }

  UpdateWeapon(weapon: Weapon): Observable<Weapon> {
    return this.http.put<Weapon>(`${this.apiUrl}/UpdateWeapon`, weapon);
  }

  DeleteWeapon(id: Number): Observable<Weapon> {
    return this.http.delete<Weapon>(`${this.apiUrl}/DeleteWeapon/${id}`);
  }
}
