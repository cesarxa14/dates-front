import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService} from '../../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading:boolean;
  loginForm: FormGroup;
  constructor(private _formBuilder : FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.builderForm();
  }

  builderForm(){
    // let pattern = '^[a-zA-Z0-9._@\-]*$';
    let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let form = this._formBuilder.group({
      usuario: ['', [Validators.required, Validators.pattern(pattern)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    }) 
    form.valueChanges.subscribe(()=>{
      // this.invalidForm = this.loginForm.invalid;
    });
    return form;
  }
  /**Getters */
  get usuario() { return this.loginForm.controls['usuario']; }
  get password() { return this.loginForm.controls['password']; }

  login(){
    this.isLoading=true;
    console.log(this.loginForm.valid);
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe(res=>{
      console.log('res', res)
      setTimeout(() => {
        this.isLoading =false;  
      }, 1000);
      
      // this.router.navigateByUrl('/register');
    })
  }

}
