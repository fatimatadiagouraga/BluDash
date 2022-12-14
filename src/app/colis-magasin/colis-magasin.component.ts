import { Component,OnInit } from '@angular/core';

import{Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import swal from 'sweetalert2';

@Component({
  selector: 'app-colis-magasin',
  templateUrl: './colis-magasin.component.html',
  styleUrls: ['./colis-magasin.component.scss']
})
export class ColisMagasinComponent implements OnInit{
  magasin: any;
  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog,private routed:ActivatedRoute){}
  ngOnInit(): void {

    this. listColisMagasin();
    
  }

  listColisMagasin(){
    return this.Service.ListColisMagasin().subscribe(data => {
      this.magasin =data;
      console.log(this.magasin);
     
    });
  }

  livrer(idColis:any){
    this.Service.livrer(idColis).subscribe(data =>{
      this.ngOnInit();
    }
    );
    
  }
  onConfirm(id:any){
    swal.fire({
      title: 'Attention !!!',
        text: "Voulez-vous livrer ce colis ?",
        icon: 'warning',
        showCancelButton: true,
        showCloseButton:false,
        confirmButtonColor: '#060606',
        cancelButtonColor: '#F9780C',
        confirmButtonText: 'Je livre '
}).then((result) => {
  if (result.value) {
    this. livrer(id);
    swal.fire(
      'Livrer!',
      'Colis livré avec succès.',
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
