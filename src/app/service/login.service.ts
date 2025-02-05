import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public token = '';
  constructor(private http: HttpClient) { }
  public login(username: string, password: string) {
    return this.http.get<any>(`${environment.apiUrl}/login?username=${username}&password=${password}`);
  }
}
