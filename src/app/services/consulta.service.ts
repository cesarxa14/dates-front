import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  
  private api_uri = environment.API_URL;
  constructor(private http: HttpClient,
              private router: Router) { }

  crearConsulta(obj){
    console.log(obj)
    return this.http.post(`${this.api_uri}/api/consultants/crearConsulta`, obj);
  }

  getConsultasByAsesor(params){
    return this.http.get(`${this.api_uri}/api/consultants/getConsultasByAsesor`, {params});
  }
}
