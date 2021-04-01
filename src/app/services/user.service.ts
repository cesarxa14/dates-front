import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api_uri = environment.API_URL;
  constructor(private http: HttpClient,
              private router: Router) { }

  switchedAsesorOnline(id_user){
    return this.http.post(`${this.api_uri}/switchedAsesorOnline`, id_user)
  }
}
