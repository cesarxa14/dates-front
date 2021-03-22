import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { GeneralService} from '../../services/general.service';
import { ConsultaService} from '../../services/consulta.service'
import { UserService} from '../../services/user.service';
import {Globals} from '../../../globals';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MenuItem} from 'primeng/api';
import { ModalAgregarConsultaComponent} from '../modal-agregar-consulta/modal-agregar-consulta.component';
import {MessageService, Message} from 'primeng/api';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs'



@Component({
  selector: 'app-home-asesor',
  templateUrl: './home-asesor.component.html',
  styleUrls: ['./home-asesor.component.css']
})
export class HomeAsesorComponent implements OnInit {

  list = new BehaviorSubject<any>(null);
  msgs: Message[];
  emailVerificado:boolean;
  display:boolean = false;
  mis_consultas: Array<any> = [];
  productos:any;
  responsiveOptions:any;
  items: MenuItem[];
  nombres_usuario:string;
  metadata:any = JSON.parse(localStorage.getItem('metadata'));
  token:any = localStorage.getItem('token');
  showFiller = false;
  constructor(private authService: AuthService,
              private generalService: GeneralService,
              private userService: UserService,
              private _global: Globals,
              public dialog: MatDialog,
              private messageService: MessageService,
              private consultaService: ConsultaService
              // public filterService: FilterService
              ) { 
                this.emailVerificado = this.metadata.flag_verificado;
                
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
                                    id: "1000",
                                    code: "f230fh0g3",
                                    name: "Bamboo Watch",
                                    description: "Product Description",
                                    image: "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png",
                                    price: 65,
                                    category: "Accessories",
                                    quantity: 24,
                                    inventoryStatus: "INSTOCK",
                                    rating: 3.5
                                  },
                                  {
                                    id: "1001",
                                    code: "nvklal433",
                                    name: "Black Watch",
                                    description: "Product Description",
                                    image: "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png",
                                    price: 72,
                                    category: "Accessories",
                                    quantity: 61,
                                    inventoryStatus: "INSTOCK",
                                    rating: 4
                                  },
                                  {
                                    id: "1002",
                                    code: "zz21cz3c1",
                                    name: "Blue Band",
                                    description: "Product Description",
                                    image: "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png",
                                    price: 79,
                                    category: "Fitness",
                                    quantity: 2,
                                    inventoryStatus: "LOWSTOCK",
                                    rating: 3
                                  }]
              }

  ngOnInit() {
   this.msgs = [{severity:'warn', summary:'Verifica tu email !', detail:'No podrás usar algunas funciones de la aplicación mientras no estés verificado.'}];
    const params = new HttpParams()
    .set('token', this.token)
    .set('id_persona', this.metadata.id_persona);
    this.consultaService.getConsultasByAsesor(params).subscribe((res:any)=>{
      console.log('rerere')
      // console.log(res);
      this.list.next(res);
      console.log(this.list.value)
      this.mis_consultas = res;
    })

    console.log('mis consult', this.mis_consultas)
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

  msg(){
    // this.messageService.add({severity:'info', summary:'Info Message', detail:'PrimeNG rocks', life:10000});
  }

  agregarConsulta(){
    // this.dialog.open(ModalAgregarConsultaComponent,{
    //   width: '1100px',
    //   height: '700px'
    // })
    this.display = true;

  }


  logout(){
    this.authService.logout();
  }

  console(){
    console.log('holaa csmree')
  }

  closeDialog(e){
    console.log('new con', e)
    this.mis_consultas.push(e);
    this.list.next(this.mis_consultas);
    console.log('despues de add',this.list.value )
    this.display = false;
  }

}
