import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { element } from 'protractor';
import { ConsultaService} from '../../services/consulta.service';
import { GeneralService} from '../../services/general.service';
import {MessageService} from 'primeng/api';
import {FileUpload} from 'primeng/fileupload';

@Component({
  selector: 'app-modal-agregar-consulta',
  templateUrl: './modal-agregar-consulta.component.html',
  styleUrls: ['./modal-agregar-consulta.component.css']
})
export class ModalAgregarConsultaComponent implements OnInit {
  
  @Output() closeDialog = new EventEmitter<any>();
  isLoading: boolean = false;
  token:any = localStorage.getItem('token');
  metadata:any = localStorage.getItem('metadata');
  especialidad_list:any;
  agregarConsultaForm: FormGroup;
  selectedFoto: File = null;
  constructor(private _formBuilder : FormBuilder,
              private consultaService: ConsultaService,
              private generalService: GeneralService,
              private messageService: MessageService) { }

  ngOnInit() {
    console.log(this.selectedFoto)
    this.generalService.getEspecialidades().subscribe(res=>{
      console.log('espes', res)
      this.especialidad_list = res;
    })
    this.agregarConsultaForm = this.builderForm();
  }

  builderForm(){
    let form = this._formBuilder.group({
      tituloConsulta: [null, [Validators.required]],
      descripcionConsulta: [null, [Validators.required]],
      especialidad: [null, [Validators.required]],
      precioConsulta: [null, [Validators.required]],
      // fotoConsulta: [null, [Validators.required]]
    }) 
    form.valueChanges.subscribe(()=>{
      // this.invalidForm = this.loginForm.invalid;
    });
    return form;
  }

  get tituloConsulta()    {return this.agregarConsultaForm.controls['tituloConsulta']};
  get descripcionConsulta()    {return this.agregarConsultaForm.controls['descripcionConsulta']};
  get especialidad()    {return this.agregarConsultaForm.controls['especialidad']};
  get precioConsulta()    {return this.agregarConsultaForm.controls['precioConsulta']};
  // get fotoConsulta()    {return this.agregarConsultaForm.controls['foto']};
  

  onFileChange(e){
    // this.selectedFoto = <File>e.target.files[0];
    this.selectedFoto = e.currentFiles[0];
    console.log(this.selectedFoto)
  }

  hola(e){
    console.log(e);
  }

  crearConsulta(){
    
    this.isLoading = true;
    const formData = new FormData();
    formData.append('token' , this.token);
    formData.append('metadata' , this.metadata);
    formData.append('tituloConsulta'   , this.tituloConsulta.value);
    formData.append('descripcionConsulta'   , this.descripcionConsulta.value);
    formData.append('especialidad'   , this.especialidad.value);
    formData.append('precioConsulta'   , this.precioConsulta.value);
    formData.append('fotoConsulta', this.selectedFoto);
    this.consultaService.crearConsulta(formData).subscribe((res:any)=>{
      console.log(res)
      this.isLoading = false;
      if(res.status == 0){
        this.messageService.add({severity:'success', detail:res.msj});
        let new_c = res.new_consult;
        console.log('new_c', new_c)

        this.closeDialog.emit(new_c);
        this.agregarConsultaForm.reset();
      }else{
        this.messageService.add({severity:'error', detail:res.msj});
      }
      console.log(res);
    })



  }

}
