import { Component ,Inject, OnInit} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServivesService } from '../servives.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modif-magasinier',
  templateUrl: './modif-magasinier.component.html',
  styleUrls: ['./modif-magasinier.component.scss']
})
export class ModifMagasinierComponent implements OnInit {
  magasinier: any;

  constructor(@Inject(MAT_DIALOG_DATA) public MagasinierAModifier: any,private service:ServivesService,
  public snackbar:MatSnackBar,
  public dialogue:MatDialog,private route:Router,private routed:ActivatedRoute){}

  ngOnInit(): void {
    
    this.magasinier= this.MagasinierAModifier.routed;
    
    
  }



  
  ModifMagasinier(datas:NgForm){
    
    
    return this.service.ModifChauffeur( datas.value,this.magasinier.idUtilisateur).subscribe(data =>{
      console.log(data);
      if(data){

        this.snackbar.open('Modifié avec succès','!!!', {
          duration: 3000
      });

      datas.reset();
      // this.route.navigate(['/magasin'])

      }else{
        this.snackbar.open('Merci de bien remplir','!!!', {
          duration: 3000
      });
      }

    
      
    })
}

}
