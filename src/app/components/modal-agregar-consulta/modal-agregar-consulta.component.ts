import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { element } from 'protractor';
import { ConsultaService} from '../../services/consulta.service'

@Component({
  selector: 'app-modal-agregar-consulta',
  templateUrl: './modal-agregar-consulta.component.html',
  styleUrls: ['./modal-agregar-consulta.component.css']
})
export class ModalAgregarConsultaComponent implements OnInit {

  agregarConsultaForm: FormGroup;
  selectedFoto: File = null;
  constructor(private _formBuilder : FormBuilder,
              private consultaService: ConsultaService) { }

  ngOnInit() {
    this.agregarConsultaForm = this.builderForm();
  }

  builderForm(){
    let form = this._formBuilder.group({
      nombreConsulta: [null, [Validators.required]],
      fotoConsulta: [null, [Validators.required]]
    }) 
    form.valueChanges.subscribe(()=>{
      // this.invalidForm = this.loginForm.invalid;
    });
    return form;
  }

  get nombreConsulta()    {return this.agregarConsultaForm.controls['nombreConsulta']};
  

  onFileChange(e){
    this.selectedFoto = <File>e.target.files[0];
    console.log(e)
  }

  crearConsulta(){
    console.log(this.selectedFoto)
    const formData = new FormData();
    formData.append('nombreConsulta'   , this.nombreConsulta.value);
    formData.append('fotoConsulta', this.selectedFoto);

    this.consultaService.crearConsulta(formData).subscribe((res:any)=>{
      console.log(res);
    })



  }

}
