import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { token } from '../models/token.class'; //import Model token
import { AuthTokenService } from '../Service/auth-token.service'; //import Token Service

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  public error: boolean = false;
  public tokenParam: token;
  public isLogged = false;
  
  login = {};

  constructor(
    public router: Router,
    private authService: AuthTokenService
  ) { }

  onSubmit() {
    this.authService.login(this.login).subscribe(data => {
      console.log(data);
      localStorage.setItem('userToken', data.token);
      this.isLogged = true;
      this.router.navigate(['admin']);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
   
  }

}
