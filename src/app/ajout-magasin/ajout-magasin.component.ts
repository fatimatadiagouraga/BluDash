import { Component ,OnInit} from '@angular/core';


import{Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ajout-magasin',
  templateUrl: './ajout-magasin.component.html',
  styleUrls: ['./ajout-magasin.component.scss']
})
export class AjoutMagasinComponent implements OnInit {

  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog,private routed:ActivatedRoute ){}



  ngOnInit(): void {
    
  }

  AjoutMagasin(dataMagasin : NgForm){
    this.Service.AjouterMagasin(dataMagasin.value).subscribe(data =>{
     console.log(dataMagasin);
     if (data) {
       this.snackbar.open('Ajouter avec succès',' !!!', {
        duration: 3000
       });
       dataMagasin.reset();
       this.route.navigate(['/magasin'])
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
