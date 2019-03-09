import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

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
