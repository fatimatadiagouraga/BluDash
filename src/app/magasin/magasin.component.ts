import { Component ,OnInit} from '@angular/core';
import { AjoutMagasinComponent } from '../ajout-magasin/ajout-magasin.component';
import { ModifierMagasinComponent } from '../modifier-magasin/modifier-magasin.component';


import{Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import swal from 'sweetalert2';
import { AjoutMagasinierComponent } from '../ajout-magasinier/ajout-magasinier.component';
import { ListMagasinierComponent } from '../list-magasinier/list-magasinier.component';

@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.scss']
})
export class MagasinComponent implements OnInit {
  magasins: any;
  boiterecup: any;
  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog,private routed:ActivatedRoute){}

  ngOnInit(): void {
    this.listMagasin();
    
  }

  versAjoutMagasin(){
    this.route.navigate(['/ajoutMagasin'])
  }

  listMagasin(){
    return this.Service.ListMagasinTaff().subscribe(data => {
      this.magasins =data;
      console.log(this.magasins);
     
    });
  }

  openDialog(){
    this.dialogue.open(AjoutMagasinComponent, {
    width: '50%',
    height: '55%',
    position: {left:'30%', top: '10%'} ,
    
    
    
    hasBackdrop: true,
    panelClass: 'dialogCss',
  
     });
    }

    openDialogAjoutMagasinier(){
      this.dialogue.open(AjoutMagasinierComponent, {
      width: '50%',
      height: '55%',
      position: {left:'30%', top: '10%'} ,
      
      
      
      hasBackdrop: true,
      panelClass: 'dialogCss',
    
       });
      }

      openDialogListMagasinier(){
        this.dialogue.open(ListMagasinierComponent, {
        width: '80%',
        height: '75%',
        position: {left:'10%', top: '10%'} ,
        hasBackdrop: true,
        panelClass: 'dialogCss',
      
         });
        }

  

    MagasinById(id:any){
      this.Service.MagasinById(id).subscribe(dataAdmin => {
          
      //boiterecup fonction qui permet de recuperer les données a modifier par id
      this.boiterecup =dataAdmin;
      this.dialogue.open(ModifierMagasinComponent, {
        width: '50%',
        height: '55%',
        position: {left:'30%', top: '10%'} ,
        
        
        
        hasBackdrop: true,
        panelClass: 'dialogCss',
      data: {
      
      routed: this.boiterecup,
      
          }
         });
      })
        
    
    }

    //suppression

    SuppMagasin(idMagasin:any){
      this.Service.SupprimerMagasin(idMagasin).subscribe(data =>{
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
      this. SuppMagasin(id);
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
