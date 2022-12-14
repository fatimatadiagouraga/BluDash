import { Component,OnInit } from '@angular/core';

import{Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import swal from 'sweetalert2';
import { AjoutColisComponent } from '../ajout-colis/ajout-colis.component';
import { ColisEnCoursComponent } from '../colis-en-cours/colis-en-cours.component';
import { ColisMagasinComponent } from '../colis-magasin/colis-magasin.component';

@Component({
  selector: 'app-colis',
  templateUrl: './colis.component.html',
  styleUrls: ['./colis.component.scss']
})
export class ColisComponent implements OnInit{
  colislivrer: any;

  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog,private routed:ActivatedRoute){}

  ngOnInit(): void {

    this.listColisLivrer();
    
  }


  listColisLivrer(){
    return this.Service.ListColisLivrer().subscribe(data => {
      this.colislivrer =data;
      console.log(this.colislivrer);
     
    });
  }

  openDialog(){
    this.dialogue.open(AjoutColisComponent, {
    width: '50%',
    height: '55%',
    position: {left:'30%', top: '10%'} ,
    
    
    
    hasBackdrop: true,
    panelClass: 'dialogCss',
  
     });
    }

    openDialog1(){
      this.dialogue.open(ColisEnCoursComponent, {
      width: '50%',
      height: '100%',
      position: {left:'30%', top: '10%'} ,
      
      
      
      hasBackdrop: true,
      panelClass: 'dialogCss',
    
       });
      }

      openDialog2(){
        this.dialogue.open(ColisMagasinComponent, {
        width: '50%',
        height: '100%',
        position: {left:'30%', top: '10%'} ,
        
        
        
        hasBackdrop: true,
        panelClass: 'dialogCss',
      
         });
        }


        Suppcolis(idColis:any){
          this.Service.SupprimerColis(idColis).subscribe(data =>{
            this.ngOnInit();
          }
          );
          
        }
        onConfirm(id:any){
          swal.fire({
            title: 'Attention !!!',
              text: "Voulez-vous supprimer ce COLIS?",
              icon: 'warning',
              showCancelButton: true,
              showCloseButton:false,
              confirmButtonColor: '#060606',
              cancelButtonColor: '#F9780C',
              confirmButtonText: 'Je supprime '
      }).then((result) => {
        if (result.value) {
          this. Suppcolis(id);
          swal.fire(
            'Supprimer!',
            'COLIS est supprimé avec succès.',
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
