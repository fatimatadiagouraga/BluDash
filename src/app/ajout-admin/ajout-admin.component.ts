import { Component,OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ajout-admin',
  templateUrl: './ajout-admin.component.html',
  styleUrls: ['./ajout-admin.component.scss']
})
export class AjoutAdminComponent implements OnInit{

  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog) { }

  ngOnInit(){}
  versAdmin(){
    this.route.navigate(['/admin'])
  }



  AjoutAdmin(dataAdmin : NgForm){
    this.Service.AjouterAdmin(dataAdmin.value).subscribe(data =>{
     console.log(dataAdmin);
     if (data) {
       this.snackbar.open('Ajouter avec succès',' !!!', {
        duration: 3000
       });
       dataAdmin.reset();
       this.route.navigate(['/admin'])
     } else {
      this.snackbar.open('non',' !!!', { 
        duration: 3000
       });
       
     }
     
  
 

     
    })
    

  }


}
