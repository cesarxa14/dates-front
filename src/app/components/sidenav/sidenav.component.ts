import { Component, OnInit } from '@angular/core';
// import { UserService} from '../../services/user.service';
import { GeneralService} from '../../services/general.service'
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  metadata: any = JSON.parse(localStorage.getItem('metadata'));
  displaySideNav:boolean;
  flag_Online:boolean;

  user_nombre     : string;
  user_apellido_pa: string;
  constructor(private generalService: GeneralService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.user_nombre = this.metadata.nombres;
    this.user_apellido_pa = this.metadata.apellido_pa;
    console.log(this.metadata) 
  }

  switchedOnline(e){

    let obj = {
      id_user: this.metadata.id_persona,
      flag_online: e.checked
    }
    this.generalService.switchedAsesorStatus(obj).subscribe(res=>{
      if(obj.flag_online === true){
        this.messageService.add({severity:'success', summary:'En Linea'});
      } else{
        this.messageService.add({severity:'error', summary:'Offline'});
      }
      console.log(res);
    })
    console.log(e.checked);

  }

}
