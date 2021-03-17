import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { GeneralService} from '../../services/general.service';
import { UserService} from '../../services/user.service'
import {Globals} from '../../../globals';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MenuItem} from 'primeng/api';
import { ModalAgregarConsultaComponent} from '../modal-agregar-consulta/modal-agregar-consulta.component';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-home-asesor',
  templateUrl: './home-asesor.component.html',
  styleUrls: ['./home-asesor.component.css']
})
export class HomeAsesorComponent implements OnInit {

  flag_Online:boolean;
  displaySideNav:boolean;
  display:boolean = false;
  productos:any;
  responsiveOptions:any;
  items: MenuItem[];
  nombres_usuario:string;
  metadata:any;
  showFiller = false;
  constructor(private authService: AuthService,
              private generalService: GeneralService,
              private userService: UserService,
              private _global: Globals,
              public dialog: MatDialog,
              private messageService: MessageService
              // public filterService: FilterService
              ) { 
                
                                this.responsiveOptions = [
                                  {
                                      breakpoint: '1024px',
                                      numVisible: 3,
                                      numScroll: 3
                                  },
                                  {
                                      breakpoint: '768px',
                                      numVisible: 2,
                                      numScroll: 2
                                  },
                                  {
                                      breakpoint: '560px',
                                      numVisible: 1,
                                      numScroll: 1
                                  }
                              ];
                                this.productos = [
                                  {
                                    "id": "1000",
                                    "code": "f230fh0g3",
                                    "name": "Bamboo Watch",
                                    "description": "Product Description",
                                    "image": "bamboo-watch.jpg",
                                    "price": 65,
                                    "category": "Accessories",
                                    "quantity": 24,
                                    "inventoryStatus": "INSTOCK",
                                    "rating": 5
                                  },
                                  {
                                    "id": "1001",
                                    "code": "nvklal433",
                                    "name": "Black Watch",
                                    "description": "Product Description",
                                    "image": "black-watch.jpg",
                                    "price": 72,
                                    "category": "Accessories",
                                    "quantity": 61,
                                    "inventoryStatus": "INSTOCK",
                                    "rating": 4
                                  },
                                  {
                                    "id": "1002",
                                    "code": "zz21cz3c1",
                                    "name": "Blue Band",
                                    "description": "Product Description",
                                    "image": "blue-band.jpg",
                                    "price": 79,
                                    "category": "Fitness",
                                    "quantity": 2,
                                    "inventoryStatus": "LOWSTOCK",
                                    "rating": 3
                                  }]
              }

  ngOnInit() {
    this.items = [
      {
      label: 'Home',
      icon: 'pi pi-home'
      },
      {
        label: 'Explorar',
        icon: 'pi pi-globe'
      },
      {
        label: 'Cerrar Sesión',
        command: ()=> this.logout()
      }
    ],
    
    
    // let glider = new Glider(document.querySelector('.items-consultas'));
    this.metadata = JSON.parse(localStorage.getItem('metadata'));
    this.nombres_usuario = this.metadata.nombres+ ' ' + this.metadata.apellido_pa + ' ' + this.metadata.apellido_ma;
    
  }

  agregarConsulta(){
    // this.dialog.open(ModalAgregarConsultaComponent,{
    //   width: '1100px',
    //   height: '700px'
    // })
    this.display = true;

  }

  switchedOnline(e){

    let obj = {
      id_user: this.metadata.id_persona,
      flag_online: e.checked
    }
    

    this.userService.switchedAsesorOnline(obj).subscribe(res=>{
      if(obj.flag_online === true){
        this.messageService.add({severity:'success', summary:'En Linea', detail:'Los demás usuarios verán podrán ver su estado'});
      } else{
        this.messageService.add({severity:'error', summary:'Offline', detail:'Los demás usuarios verán podrán ver su estado'});
      }
      console.log(res);
    })
    console.log(e.checked);

  }

  logout(){
    this.authService.logout();
  }

}
