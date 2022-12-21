import { Component,OnInit } from '@angular/core';
import { ModifAdminComponent } from '../modif-admin/modif-admin.component';

import{Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import swal from 'sweetalert2';
import { AjoutAdminComponent } from '../ajout-admin/ajout-admin.component';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  administrateurs:any;
  boiterecup: any;

  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog,private routed:ActivatedRoute ){}

  ngOnInit(): void {
   
    this. listAdmin();
   
  }
  dialog(){
    this.dialogue.open(AjoutAdminComponent, {
      width: '50%',
      height: '80%',
      position: {left:'30%', top: '10%'} ,
      
      
      
      hasBackdrop: true,
      panelClass: 'dialogCss',
    data: {
    
    routed: this.boiterecup,
    
        }
       });
    
   
  }

  versModifAdmin(){
    this.route.navigate(['/modifAdmin'])
  }

  versAdmin(){
    this.route.navigate(['/admin'])
  }

  listAdmin(){
    return this.Service.ListAdminActif().subscribe(data => {
      this.administrateurs =data;
      console.log(this.administrateurs);
     
    });
  }

  SuppAdmin(idAdmin:any){
    this.Service.SupprimerAdmin(idAdmin).subscribe(data =>{
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
    this. SuppAdmin(id);
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


  AdminById(id:any){
    this.Service.AdminById(id).subscribe(dataAdmin => {
        
    //boiterecup fonction qui permet de recuperer les données a modifier par id
    this.boiterecup =dataAdmin;
    this.dialogue.open(ModifAdminComponent, {
      width: '50%',
      height: '80%',
      position: {left:'30%', top: '10%'} ,
      
      
      
      hasBackdrop: true,
      panelClass: 'dialogCss',
    data: {
    
    routed: this.boiterecup,
    
        }
       });
    })
      
  
  }

}
