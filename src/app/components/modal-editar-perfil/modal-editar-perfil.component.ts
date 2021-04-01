import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

export enum PageNames {
  Personal,
  Disponibilidad,
  Estudios,
  Referencias
}
@Component({
  selector: 'app-modal-editar-perfil',
  templateUrl: './modal-editar-perfil.component.html',
  styleUrls: ['./modal-editar-perfil.component.css']
})
export class ModalEditarPerfilComponent implements OnInit {

  DialogPageIndex = 0;
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    console.log('personal', PageNames.Personal)
    this.items = [
      {label: 'Personal'},
      {label: 'Disponibilidad'},
      {label: 'Estudios'},
      {label: 'Referencias',
    }
  ];
  }

  console(e){
    console.log(e)
  }

}
