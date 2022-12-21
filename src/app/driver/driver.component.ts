import { Component,OnInit } from '@angular/core';

import{Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import swal from 'sweetalert2';
import { AjoutDriverComponent } from '../ajout-driver/ajout-driver.component';
import { ModifierDriverComponent } from '../modifier-driver/modifier-driver.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit{
  chauffeur: any;
  boiterecup: any;

  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog,private routed:ActivatedRoute){}
  ngOnInit(): void {

    this.listChauffeur();
    
  }

  listChauffeur(){
    return this.Service.ListChauffeurActif().subscribe(data => {
      this.chauffeur =data;
      console.log(this.chauffeur);
     
    });
  }

  dialog(){
    this.dialogue.open(AjoutDriverComponent, 
    {
      width: '70%',
      height: '80%',
      position: {left:'10%', top: '10%'} ,
      
      
      
      hasBackdrop: true,
      panelClass: 'dialogCss',
 
    });
  }


  ChauffeurById(id:any){
    this.Service.ChauffeurById(id).subscribe(dataChauffeur => {
        
    //boiterecup fonction qui permet de recuperer les données a modifier par id
    this.boiterecup =dataChauffeur;
    this.dialogue.open(ModifierDriverComponent, {
      width: '70%',
      height: '80%',
      position: {left:'25%', top: '10%'} ,
      
      
      
      hasBackdrop: true,
      panelClass: 'dialogCss',
    data: {
    
    routed: this.boiterecup,
    
        }
       });
    })
      
  
  }



  SuppChauffeur(idUtilisateur:any){
    this.Service.SupprimerChauffeur(idUtilisateur).subscribe(data =>{
      this.ngOnInit();
    }
    );
    
  }
  onConfirm(id:any){
    swal.fire({
      title: 'Attention !!!',
        text: "Voulez-vous supprimer cet admin ?",
        icon: 'warning',
        showCancelButton: true,
        showCloseButton:false,
        confirmButtonColor: '#060606',
        cancelButtonColor: '#F9780C',
        confirmButtonText: 'Je supprime '
}).then((result) => {
  if (result.value) {
    this. SuppChauffeur(id);
    swal.fire(
      'Supprimer!',
      'Admin est supprimé avec succès.',
      'warning'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === swal.DismissReason.cancel
  ) {
    swal.fire(
      'Annuler',
      'Vous avez annulé la suppression',
      'error'
    )
  }
    })
  }



}
