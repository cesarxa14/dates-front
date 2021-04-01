import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './components/main/main.component';
import { LoginComponent} from './components/auth/login/login.component';
import { RegisterComponent} from './components/auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeClienteComponent } from './components/home-cliente/home-cliente.component';
import { HomeAsesorComponent } from './components/home-asesor/home-asesor.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path: '', component: MainComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'home-cliente', canActivate:[AuthGuard], component: HomeClienteComponent },
  {path: 'home-asesor',  canActivate:[AuthGuard],  component: HomeAsesorComponent },
  {path: 'profile', canActivate:[AuthGuard], component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
