import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Secret } from '../models/Secret';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

  private apiUrl = environment.ApiUrl;

  constructor(private http: HttpClient) { }

  GetSecrets(): Observable<Secret[]> {
    return this.http.get<Secret[]>(`${this.apiUrl}/GetSecrets`);
  }

  GetSecretById(id: Number): Observable<Secret> {
    return this.http.get<Secret>(`${this.apiUrl}/GetSecretById/${id}`);
  }

  CreateSecret(secret: Secret): Observable<Secret> {
    return this.http.post<Secret>(`${this.apiUrl}/CreateSecret`, secret);
  }

  UpdateSecret(secret: Secret): Observable<Secret> {
    return this.http.put<Secret>(`${this.apiUrl}/UpdateSecret`, secret);
  }
}
