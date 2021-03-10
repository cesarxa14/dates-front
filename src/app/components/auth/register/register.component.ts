import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoading:boolean;
  registerForm: FormGroup;
  constructor(private _formBuilder : FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.builderForm();
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
      password: [null, [Validators.required]],
      
    }) 
    form.valueChanges.subscribe(()=>{
      // this.invalidForm = this.loginForm.invalid;
    });
    return form;
  }

  register(){
    console.log('register', this.registerForm.value);

    this.authService.register(this.registerForm.value).subscribe(res=>{
      console.log('sdds', res);
    })
  }

}
