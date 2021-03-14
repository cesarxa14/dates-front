import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Globals} from '../../../globals';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalAgregarConsultaComponent} from '../modal-agregar-consulta/modal-agregar-consulta.component'

@Component({
  selector: 'app-home-asesor',
  templateUrl: './home-asesor.component.html',
  styleUrls: ['./home-asesor.component.css']
})
export class HomeAsesorComponent implements OnInit {

  nombre:string;
  constructor(private authService: AuthService,
              private _global: Globals,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.nombre = this._global._NOMBRES;
    
  }
  agregarConsulta(){
    this.dialog.open(ModalAgregarConsultaComponent,{
      width: '1100px',
      height: '700px'
    })

  }

  logout(){
    this.authService.logout();
  }

}
