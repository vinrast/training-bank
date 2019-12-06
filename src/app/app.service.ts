import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  api_url: string = "http://localhost:3000/";

  constructor(private http_client:HttpClient) { }

  createUser(user: object) : Observable<any>{
    return this.http_client.post(`${this.api_url}/users`, user )
  }

  storeToken(token: string){
    return localStorage.setItem('user_cpf', token);
  }

  getToken(): string{
    return localStorage.getItem('user_cpf');
  }

  getUser(cpf: string){
    return this.http_client.get(`${this.api_url}/users/cpf/${cpf}`)
  }

  isAuthenticated() {
    if (this.getToken()) {
      return true;
    }
    return false;
  }
} 
