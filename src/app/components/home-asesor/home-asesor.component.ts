import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Globals} from '../../../globals';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalAgregarConsultaComponent} from '../modal-agregar-consulta/modal-agregar-consulta.component';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home-asesor',
  templateUrl: './home-asesor.component.html',
  styleUrls: ['./home-asesor.component.css']
})
export class HomeAsesorComponent implements OnInit {

  nombres_usuario:string;
  metadata:any;
  showFiller = false;
  constructor(private authService: AuthService,
              private _global: Globals,
              public dialog: MatDialog) { }

  ngOnInit() {
    
    // let glider = new Glider(document.querySelector('.items-consultas'));
    this.metadata = JSON.parse(localStorage.getItem('metadata'));
    this.nombres_usuario = this.metadata.nombres+ ' ' + this.metadata.apellido_pa + ' ' + this.metadata.apellido_ma;
    
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
