import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public clicklogin = true;
  public click = false;

  constructor() { }

  ngOnInit() {
  }

  onclick(){
    this.click = !this.click;
    this.clicklogin = !this.clicklogin;
  }

}
