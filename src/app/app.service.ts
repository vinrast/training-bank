import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  api_url: string = "http://localhost:3000/";

  constructor(private http_client:HttpClient) { }

  createUser(user: object): Observable<any>{
    return this.http_client.post(`${this.api_url}/users`, user )
  }

  isAuthenticated() {
    const token = localStorage.getItem('user_cpf');
    if (token) {
      return true;
    }
    return false;
  }
} 
