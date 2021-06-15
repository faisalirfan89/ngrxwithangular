import { Component, Input, OnInit } from '@angular/core';
import { login } from '../model/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  viewLogin:login;
  constructor( private router: Router) { 
    this.viewLogin = new login;
  }

  ngOnInit(): void {
  }
  
  onSubmit():void {
        console.log(this.viewLogin)
        if (this.viewLogin.email === "admin" && this.viewLogin.password ==="admin")
        {
          console.log("Success")
          //this.router.navigate(['/hero', hero.id]);
          this.router.navigate(['/useroperation']);
        }
        else
        {
          console.log("Failed")
        }
  }
}
