import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { element } from 'protractor';
import { ConsultaService} from '../../services/consulta.service';
import { GeneralService} from '../../services/general.service'

@Component({
  selector: 'app-modal-agregar-consulta',
  templateUrl: './modal-agregar-consulta.component.html',
  styleUrls: ['./modal-agregar-consulta.component.css']
})
export class ModalAgregarConsultaComponent implements OnInit {

  especialidad_list:any;
  agregarConsultaForm: FormGroup;
  selectedFoto: File = null;
  constructor(private _formBuilder : FormBuilder,
              private consultaService: ConsultaService,
              private generalService: GeneralService) { }

  ngOnInit() {
    console.log('modal agregar con')
    this.generalService.getEspecialidades().subscribe(res=>{
      this.especialidad_list = res;
      console.log(res);
    })
    this.agregarConsultaForm = this.builderForm();
  }

  builderForm(){
    let form = this._formBuilder.group({
      nombreConsulta: [null, [Validators.required]],
      descripcionConsulta: [null, [Validators.required]],
      especialidad: [null, [Validators.required]],
      precioConsulta: [null, [Validators.required]],
      fotoConsulta: [null, [Validators.required]]
    }) 
    form.valueChanges.subscribe(()=>{
      // this.invalidForm = this.loginForm.invalid;
    });
    return form;
  }

  get nombreConsulta()    {return this.agregarConsultaForm.controls['nombreConsulta']};
  get descripcionConsulta()    {return this.agregarConsultaForm.controls['descripcionConsulta']};
  get especialidad()    {return this.agregarConsultaForm.controls['especialidad']};
  get precioConsulta()    {return this.agregarConsultaForm.controls['precioConsulta']};
  

  onFileChange(e){
    this.selectedFoto = <File>e.target.files[0];
    console.log(e)
  }

  crearConsulta(){
    
    const formData = new FormData();
    formData.append('nombreConsulta'   , this.nombreConsulta.value);
    formData.append('descripcionConsulta'   , this.descripcionConsulta.value);
    formData.append('especialidad'   , this.especialidad.value);
    formData.append('precioConsulta'   , this.precioConsulta.value);
    formData.append('fotoConsulta', this.selectedFoto);
    console.log(formData)
    this.consultaService.crearConsulta(formData).subscribe((res:any)=>{
      console.log(res);
    })



  }

}
