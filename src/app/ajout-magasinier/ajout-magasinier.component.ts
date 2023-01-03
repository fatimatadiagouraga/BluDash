import { Component,OnInit } from '@angular/core';


import{Router} from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ajout-magasinier',
  templateUrl: './ajout-magasinier.component.html',
  styleUrls: ['./ajout-magasinier.component.scss']
})
export class AjoutMagasinierComponent {
  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog){}
  ngOnInit(): void {}
    


  AjoutMagasinier(datas : NgForm){
    
    this.Service.AjouterMagasinier(datas.value).subscribe(data =>{
     console.log(datas);
     if (data) {
       this.snackbar.open('Ajouter avec succès',' !!!', {
        duration: 3000
       });
       datas.reset();
       this.route.navigate(['/magasin'])
     }else{
      this.snackbar.open('login ou mot de passe existant',' !!!', { 
        duration: 3000
       });
       
     }
     
  
 

     
    });
    
    

  }

  close(){
    this.dialogue.closeAll();
    }

}
