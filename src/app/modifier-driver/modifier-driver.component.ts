import { Component ,Inject, OnInit} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServivesService } from '../servives.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modifier-driver',
  templateUrl: './modifier-driver.component.html',
  styleUrls: ['./modifier-driver.component.scss']
})
export class ModifierDriverComponent implements OnInit {
  chauffeur: any;
  magasins: any;

  constructor(@Inject(MAT_DIALOG_DATA) public ChauffeurAModifier: any,private service:ServivesService,
  public snackbar:MatSnackBar,
  public dialogue:MatDialog,private route:Router,private routed:ActivatedRoute){}

  ngOnInit(): void {
    this.listMagasin();
    this.chauffeur= this.ChauffeurAModifier.routed;
    console.log(this.chauffeur)
    
  }


  listMagasin(){
    return this.service.ListMagasinTaff().subscribe(data => {
      this.magasins =data;
      console.log(this.magasins);
     
    });
  }


  ModifChauffeur(datas:NgForm){
    datas.value.magasin={"idMagasin" : datas.value['magasin']}
    
    return this.service.ModifChauffeur( datas.value,this.chauffeur.idUtilisateur).subscribe(data =>{
      console.log(data);
      if(data){

        this.snackbar.open('Modifié avec succès','!!!', {
          duration: 3000
      });

      datas.reset();
      this.route.navigate(['/driver'])

      }else{
        this.snackbar.open('Merci de bien remplir','!!!', {
          duration: 3000
      });
      }

    
      
    })
}



  close(){
    this.dialogue.closeAll();
    }

}
