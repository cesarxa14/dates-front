import { Component, OnInit } from '@angular/core';
import {Globals} from '../../../../globals';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService} from '../../../services/auth.service';
import { GeneralService} from '../../../services/general.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token:any;
  metadata:any;
  isLoading:boolean;
  loginForm: FormGroup;
  constructor(private _formBuilder : FormBuilder,
              private router: Router,
              private authService: AuthService,
              private generalService: GeneralService,
              private _snackBar: MatSnackBar,
              private _global: Globals) { }

  ngOnInit() {
    this.loginForm = this.builderForm();
    let meta= localStorage.getItem('metadata');
    console.log(meta)
  }

  builderForm(){
    // let pattern = '^[a-zA-Z0-9._@\-]*$';
    let pattern_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let form = this._formBuilder.group({
      correo: ['', [Validators.required, Validators.pattern(pattern_email)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    }) 
    form.valueChanges.subscribe(()=>{
      // this.invalidForm = this.loginForm.invalid;
    });
    return form;
  }
  /**Getters */
  get correo() { return this.loginForm.controls['correo']; }
  get password() { return this.loginForm.controls['password']; }

  login(){
    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe((res:any)=>{
      setTimeout(() => {
        this.isLoading = false;  
      }, 1000);
      console.log('respues', res)
      
      if(res.status == 0){
        this.metadata = res.metadata;
        this.generalService.nombres_usuario.next(this.metadata.nombres);
       
        localStorage.setItem('metadata', JSON.stringify(this.metadata));
        localStorage.setItem('token', res.token);
        this.token = localStorage.getItem('token');
        if(res.metadata.id_rol === 1){
          this.router.navigateByUrl('/home-cliente');
        }
        else if(res.metadata.id_rol === 2){
          this.router.navigateByUrl('/home-asesor');
        }
      }else{
        this._snackBar.open(res.msj, 'Cerrar', {duration:1000})
      }      
      
    })
  }

}
