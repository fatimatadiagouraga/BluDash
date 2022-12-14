import { Component,OnInit } from '@angular/core';

import{Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import swal from 'sweetalert2';
import { ModifColisComponent } from '../modif-colis/modif-colis.component';

@Component({
  selector: 'app-colis-en-cours',
  templateUrl: './colis-en-cours.component.html',
  styleUrls: ['./colis-en-cours.component.scss']
})
export class ColisEnCoursComponent implements OnInit{
  colisEncours: any;
  boiterecup: any;
  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog,private routed:ActivatedRoute){}
  ngOnInit(): void {

    this.listColisEncours();
    
  }

  listColisEncours(){
    return this.Service.ListColisEncours().subscribe(data => {
      this.colisEncours =data;
      console.log(this.colisEncours);
     
    });
  }

  ColisById(id:any){
    this.Service.ColisById(id).subscribe(dataColis => {
        
    //boiterecup fonction qui permet de recuperer les données a modifier par id
    this.boiterecup =dataColis;
    this.dialogue.open(ModifColisComponent, {
      width: '50%',
      height: '55%',
      position: {left:'30%', top: '-20%'} ,
      
      
      
      hasBackdrop: true,
      panelClass: 'dialogCss',
    data: {
    
    routed: this.boiterecup,
    
        }
       });
    })
      
  
  }

  
  magasin(idColis:any){
    this.Service.magasin(idColis).subscribe(data =>{
      this.ngOnInit();
    }
    );
    
  }
  onConfirm(id:any){
    swal.fire({
      title: 'Attention !!!',
        text: "Voulez-vous mettre en magasin ce colis",
        icon: 'warning',
        showCancelButton: true,
        showCloseButton:false,
        confirmButtonColor: '#060606',
        cancelButtonColor: '#F9780C',
        confirmButtonText: 'Je confirme '
}).then((result) => {
  if (result.value) {
    this.magasin(id);
    swal.fire(
      'Magasin!',
      'Colis mis en magasin avec succès.',
      'warning'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === swal.DismissReason.cancel
  ) {
    swal.fire(
      'Annuler',
      'Vous avez annulé la livraison',
      'error'
    )
  }
    })
  }
  


  close(){
    this.dialogue.closeAll();
    }

}
