import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home-asesor',
  templateUrl: './home-asesor.component.html',
  styleUrls: ['./home-asesor.component.css']
})
export class HomeAsesorComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
