import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor(
    public routerService : Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    if(localStorage.getItem('userToken')){
      localStorage.removeItem('userToken');
      this.routerService.navigate(['login-admin']);
    }
  }
}
