import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModules} from './material.modules';
import { PrimeModules} from './prime.modules'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptorService} from './services/auth-interceptor.service';
import { Globals} from '../globals';


import { MAT_DATE_LOCALE } from '@angular/material/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeClienteComponent } from './components/home-cliente/home-cliente.component';
import { HomeAsesorComponent } from './components/home-asesor/home-asesor.component';
import { ModalAgregarConsultaComponent } from './components/modal-agregar-consulta/modal-agregar-consulta.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    HomeClienteComponent,
    HomeAsesorComponent,
    ModalAgregarConsultaComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    PrimeModules,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    Globals,
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi:true
    // }
  ],
  entryComponents:[
    ModalAgregarConsultaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
