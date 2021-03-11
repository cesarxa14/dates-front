import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService} from '../../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token:any;
  isLoading:boolean;
  loginForm: FormGroup;
  constructor(private _formBuilder : FormBuilder,
              private router: Router,
              private authService: AuthService,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.builderForm();
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

      if(res.status == 0){
        localStorage.setItem('token', res.token);
        this.token = localStorage.getItem('token');
        this.router.navigateByUrl('/home-cliente');
      }else{
        this._snackBar.open(res.msj, 'Cerrar', {duration:1000})
      }      
      
    })
  }

}
