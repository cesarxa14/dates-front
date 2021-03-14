import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GeneralService} from '../../services/general.service'
import {Globals} from '../../../globals';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit {

  metadata:any;
  nombres_usuario:string;
  constructor(private authService:AuthService,
              private generalService:GeneralService,
              private _global: Globals) { }

  ngOnInit() {
    this.metadata = JSON.parse(localStorage.getItem('metadata'));
    console.log(this.metadata)
    this.nombres_usuario = this.metadata.nombres+ ' ' + this.metadata.apellido_pa + ' ' + this.metadata.apellido_ma;

  }

  logout(){
    this.authService.logout();
  }

}
