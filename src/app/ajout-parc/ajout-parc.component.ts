import { Component,OnInit } from '@angular/core';


import{Router} from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-ajout-parc',
  templateUrl: './ajout-parc.component.html',
  styleUrls: ['./ajout-parc.component.scss']
})
export class AjoutParcComponent implements OnInit {

  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog){}

  ngOnInit(): void {
    
  }


  AjoutParc(dataParc : NgForm){
    this.Service.AjouterParc(dataParc.value).subscribe(data =>{
     console.log(dataParc);
     if (data) {
       this.snackbar.open('Ajouter avec succès',' !!!', {
        duration: 3000
       });
       dataParc.reset();
       this.route.navigate(['/parc'])
     } else {
      this.snackbar.open('non',' !!!', { 
        duration: 3000
       });
       
     }
     
  
 

     
    })
    

  }

  close(){
    this.dialogue.closeAll();
    }

}
