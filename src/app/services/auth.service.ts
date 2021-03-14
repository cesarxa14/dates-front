import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api_uri = environment.API_URL;
  constructor(private http: HttpClient,
              private router: Router) { }

  login(obj){
    return this.http.post(`${this.api_uri}/login`, obj);
  }

  register(obj){
    return this.http.post(`${this.api_uri}/register`, obj);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('metadata');
    this.router.navigateByUrl('/login');
  }
}
