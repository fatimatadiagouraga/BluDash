import { Component,OnInit } from '@angular/core';


import{Router} from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-ajout-driver',
  templateUrl: './ajout-driver.component.html',
  styleUrls: ['./ajout-driver.component.scss']
})
export class AjoutDriverComponent implements OnInit{
  magasins: any;
  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog){}
  ngOnInit(): void {
    this. listMagasin();
  }


  listMagasin(){
    return this.Service.ListMagasinTaff().subscribe(data => {
      this.magasins =data;
      console.log(this.magasins);
     
    });
  }


  AjoutChauffeur(datas : NgForm){
    datas.value.magasin={"idMagasin" : datas.value['magasin']}
    this.Service.AjouterChauffeur(datas.value).subscribe(data =>{
     console.log(datas);
     if (data) {
       this.snackbar.open('Ajouter avec succès',' !!!', {
        duration: 3000
       });
       datas.reset();
       this.route.navigate(['/driver'])
     } else {
      this.snackbar.open('non',' !!!', { 
        duration: 3000
       });
       
     }
     
  
 

     
    });
    
    

  }


  



  close(){
    this.dialogue.closeAll();
    }

}
