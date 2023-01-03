import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
// import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  // loginInfo: any;
  constructor(private service :ServivesService,public snackbar:MatSnackBar,private route: Router,private routed:ActivatedRoute){}
  ngOnInit(): void {
    
  }

  onLogin(form :NgForm){
    this.service.login(form.value["login"],form.value["password"],form.value).subscribe((res)=>{
      if(res){

        
        let loginInfo = res;
       
        let loginStatus = true

        localStorage.setItem('isLogin', JSON.stringify(loginInfo));
        localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
        this.route.navigateByUrl('/acceuil')
        // location.replace("")
      }else{
        this.snackbar.open('ERREUR','Mot de passe ou login incorrect', {
        duration: 3000
        });
            this.route.navigate(["/log"])
            let loginStatus = false;
            localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
            console.log("login non connecter");
          
            
          } 
        
        }
        
        );
      }
  

}
