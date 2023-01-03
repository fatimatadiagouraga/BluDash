import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  data: any;
  user: any;
  loginStatus: any;
  loginData: any;
  constructor(public route:Router){}
  ngOnInit(): void {

    this.data=localStorage.getItem('isLogin');
    this.user=JSON.parse(this.data)
   
    console.log(this.user);
    this.loginStatus = JSON.parse(localStorage['loginStatus']);

    //deconnexion
    this.loginData = (localStorage["isLogin"]);
    console.log(this.loginData);
    
  }

  
  
  
  logOut(){
    localStorage.removeItem('isLogin');
    this.route.navigate(['/log']);
    // location.replace("/log")
  
  }

}
