import { Component,OnInit } from '@angular/core';

import{Router} from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ajout-trajet',
  templateUrl: './ajout-trajet.component.html',
  styleUrls: ['./ajout-trajet.component.scss']
})
export class AjoutTrajetComponent implements OnInit {
  parc: any;
  chauffeur: any;

  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog){}
  ngOnInit(): void {
    this.listChauffeur();
    this.listParcTaff()
  }

  listParcTaff(){
    return this.Service.ListParcTaff().subscribe(data => {
      this.parc =data;
      console.log(this.parc);
     
    });
  }

  listChauffeur(){
    return this.Service.ListChauffeurActif().subscribe(data => {
      this.chauffeur =data;
      console.log(this.chauffeur);
     
    });
  }


  AjoutTrajet(datas : NgForm){
    datas.value.parc={"idParc" : datas.value['parc']}
    datas.value.utilisateur={"idUtilisateur" : datas.value['utilisateur']}


    this.Service.AjouterTrajet(datas.value).subscribe(data =>{
     console.log(datas);
     if (data) {
       this.snackbar.open('Ajouter avec succès',' !!!', {
        duration: 3000
       });
       datas.reset();
       this.route.navigate(['/trajet'])
     } else {
      this.snackbar.open('non',' !!!', { 
        duration: 3000
       });
       
     }
     
  
 

     
    });
    
    

  }


  



  close(){
    this.dialogue.closeAll();
    }

}
