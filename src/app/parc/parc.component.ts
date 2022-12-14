import { Component,OnInit } from '@angular/core';

import{Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import swal from 'sweetalert2';
import { ModifierParcComponent } from '../modifier-parc/modifier-parc.component';
import { AjoutParcComponent } from '../ajout-parc/ajout-parc.component';

@Component({
  selector: 'app-parc',
  templateUrl: './parc.component.html',
  styleUrls: ['./parc.component.scss']
})
export class ParcComponent implements OnInit {
  parc: any;
  boiterecup: any;

  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog,private routed:ActivatedRoute){}

  ngOnInit(): void {

    this.listParcTaff();
    
  }

  versAjoutParc(){
    this.route.navigate(['/ajoutParc'])
  }


  listParcTaff(){
    return this.Service.ListParcTaff().subscribe(data => {
      this.parc =data;
      console.log(this.parc);
     
    });
  }

  SuppParc(idParc:any){
    this.Service.SupprimerParc(idParc).subscribe(data =>{
      this.ngOnInit();
    }
    );
    
  }
  onConfirm(id:any){
    swal.fire({
      title: 'Attention !!!',
        text: "Voulez-vous supprimer ce parc ?",
        icon: 'warning',
        showCancelButton: true,
        showCloseButton:false,
        confirmButtonColor: '#060606',
        cancelButtonColor: '#F9780C',
        confirmButtonText: 'Je supprime '
}).then((result) => {
  if (result.value) {
    this. SuppParc(id);
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



  ParcById(id:any){
    this.Service.ParcById(id).subscribe(data => {
        
    //boiterecup fonction qui permet de recuperer les données a modifier par id
    this.boiterecup =data;
    this.dialogue.open(ModifierParcComponent, {
      width: '50%',
      height: '75%',
      position: {left:'30%', top: '10%'} ,
      
      
      
      hasBackdrop: true,
      panelClass: 'dialogCss',
    data: {
    
    routed: this.boiterecup,
    
        }
       });
    })
      
  
    }


    dialog(){
      this.dialogue.open(AjoutParcComponent, {
      width: '70%',
      height: '55%',
      position: {left:'30%', top: '-20%'} ,
      
      
      
      hasBackdrop: true,
      panelClass: 'dialogCss',
   
       });}

}
