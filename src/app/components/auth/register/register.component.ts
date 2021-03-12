import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService} from '../../../services/auth.service';
import { GeneralService} from '../../../services/general.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  token:any;
  especilidad_list:any = [];
  isLoading:boolean;
  registerForm: FormGroup;
  constructor(private _formBuilder : FormBuilder,
              private router: Router,
              private authService: AuthService,
              private generalService: GeneralService,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.builderForm();
    this.generalService.getEspecialidad().subscribe(res=>{
      console.log(res)
      this.especilidad_list = res;
    })
  }

  builderForm(){
    let pattern_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let form = this._formBuilder.group({
      nombres: ['', [Validators.required]],
      apellido_pa: ['', [Validators.required]],
      apellido_ma: ['', [Validators.required]],
      fecha_naci: [null, [Validators.required]],
      tipo_usuario: [null, [Validators.required]],
      correo: [null, [Validators.required, Validators.pattern(pattern_email)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      
    }) 
    form.valueChanges.subscribe(()=>{
      // this.invalidForm = this.loginForm.invalid;
    });
    return form;
  }

  register(){
    console.log('register', this.registerForm.value);
    this.isLoading = true;
    this.authService.register(this.registerForm.value).subscribe((res:any)=>{
      setTimeout(() => {
        this.isLoading = false;  
        
      }, 1000);
      this._snackBar.open(res.msj, 'Cerrar', {duration:1000})
      if(res.status == 0){
        localStorage.setItem('token', res.token);
        this.token = localStorage.getItem('token');
        this.router.navigateByUrl('/home-asesor');
      }else{
        
      }  
    })
  }

}
