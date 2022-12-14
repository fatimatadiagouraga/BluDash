import { Component,OnInit } from '@angular/core';

import{Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import swal from 'sweetalert2';
import { AjoutTrajetComponent } from '../ajout-trajet/ajout-trajet.component';
import { TrajetEnCoursComponent } from '../trajet-en-cours/trajet-en-cours.component';

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.scss']
})
export class TrajetComponent implements OnInit {
  trajet: any;
  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog,private routed:ActivatedRoute){}
  ngOnInit(): void {

  this.listTrajetArrivee();
    
    
  }

  listTrajetArrivee(){
    return this.Service.ListTrajetArriver().subscribe(data => {
      this.trajet=data;
      console.log(this.trajet);
     
    });
  }


  dialog(){
    this.dialogue.open(AjoutTrajetComponent, 
    {
      width: '70%',
      height: '55%',
      position: {left:'20%', top: '10%'} ,
      
      
      
      hasBackdrop: true,
      panelClass: 'dialogCss',
 
    });
  }

  dialog2(){
    this.dialogue.open(TrajetEnCoursComponent, 
    {
      width: '70%',
      height: '55%',
      position: {left:'20%', top: '10%'} ,
      
      
      
      hasBackdrop: true,
      panelClass: 'dialogCss',
 
    });
  }



  SuppTrajet(idTrajet:any){
    this.Service.SupprimerTrajet(idTrajet).subscribe(data =>{
      this.ngOnInit();
    }
    );
    
  }
  onConfirm(id:any){
    swal.fire({
      title: 'Attention !!!',
        text: "Voulez-vous supprimer ce trajet ?",
        icon: 'warning',
        showCancelButton: true,
        showCloseButton:false,
        confirmButtonColor: '#060606',
        cancelButtonColor: '#F9780C',
        confirmButtonText: 'Je supprime '
}).then((result) => {
  if (result.value) {
    this. SuppTrajet(id);
    swal.fire(
      'Supprimer!',
      'trajet est supprimé avec succès.',
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
