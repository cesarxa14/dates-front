import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private api_uri = environment.API_URL + '/api/general';
  nombres_usuario = new BehaviorSubject<string>(null);
  constructor(private http: HttpClient,
              private router: Router) { }
              

  getRoles(){
    return this.http.get(`${this.api_uri}/getRoles`);
  }

  getEspecialidades(){
    return this.http.get(`${this.api_uri}/getEspecialidades`);
  }

  switchedAsesorStatus(obj){
    return this.http.post(`${this.api_uri}/switchedAsesorStatus`, obj);
  }

  get
}
