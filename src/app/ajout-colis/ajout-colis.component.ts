import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajout-colis',
  templateUrl: './ajout-colis.component.html',
  styleUrls: ['./ajout-colis.component.scss']
})
export class AjoutColisComponent implements  OnInit{
  trajet: any;
  modcolis:any;

  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog,private routed:ActivatedRoute ){}
  
  ngOnInit(): void {

    this.listTrajetEncours();
    
  }

  listTrajetEncours(){
    return this.Service.ListTrajetEncours().subscribe(data => {
      this.trajet=data;
      console.log(this.trajet);
     
    });
  }


  close(){
    this.dialogue.closeAll();
    }


    Ajoutcolis(datas : NgForm){
      datas.value.trajet={"idTrajet" : datas.value['trajet']}
      this.Service.AjouterColis(datas.value,datas.value.trajet.idTrajet).subscribe(data =>{
       console.log(datas);
       this.modcolis=data;
       this.Service.ModifColisforAdd( this.modcolis.value,this.modcolis.idColis).subscribe(data =>{
        console.log(data);
      
       
    
   
  
       
      });

       if (data) {
         this.snackbar.open('Ajouter avec succès',' !!!', {
          duration: 3000
         });
         datas.reset();
         this.route.navigate(['/colis'])
       } else {
        this.snackbar.open('non',' !!!', { 
          duration: 3000
         });
         
       }
      
      
  
    })}

}
