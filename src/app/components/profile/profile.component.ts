import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  val = 4;
  constructor() { }

  ngOnInit() {
  }

  openModalEdit(){
    console.log('open modal edit')
  }

}
