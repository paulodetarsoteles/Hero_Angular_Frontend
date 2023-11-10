import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Secret } from '../models/Secret';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

  private apiUrl = `${environment.ApiUrl}/GetSecrets`;

  constructor(private http: HttpClient) { }

  GetSecrets(): Observable<Secret[]> {
    return this.http.get<Secret[]>(this.apiUrl);
  }
}
