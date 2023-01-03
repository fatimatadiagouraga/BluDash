import { Component,OnInit } from '@angular/core';

import{Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import swal from 'sweetalert2';
import { ModifMagasinierComponent } from '../modif-magasinier/modif-magasinier.component';
@Component({
  selector: 'app-list-magasinier',
  templateUrl: './list-magasinier.component.html',
  styleUrls: ['./list-magasinier.component.scss']
})
export class ListMagasinierComponent implements OnInit{
  magasinier: any;
  boiterecup: any;

  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog,private routed:ActivatedRoute){}
  ngOnInit(): void {

    this.listMagasinier();
    
  }

  listMagasinier(){
    return this.Service.ListMagasinierActif().subscribe(data => {
      this.magasinier =data;
      console.log(this.magasinier);
     
    });
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


  MagasinierById(id:any){
    this.Service.ChauffeurById(id).subscribe(dataChauffeur => {
        
    //boiterecup fonction qui permet de recuperer les données a modifier par id
    this.boiterecup =dataChauffeur;
    this.dialogue.open(ModifMagasinierComponent, {
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

}
