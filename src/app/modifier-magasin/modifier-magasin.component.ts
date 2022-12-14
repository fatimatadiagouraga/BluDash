import { Component ,Inject, OnInit} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServivesService } from '../servives.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-magasin',
  templateUrl: './modifier-magasin.component.html',
  styleUrls: ['./modifier-magasin.component.scss']
})
export class ModifierMagasinComponent implements OnInit {
  magasin: any;
  constructor(@Inject(MAT_DIALOG_DATA) public magasinAModifier: any,private service:ServivesService,
  public snackbar:MatSnackBar,
  public dialogue:MatDialog,private route:Router,private routed:ActivatedRoute){}
  ngOnInit(): void {

    this.magasin= this.magasinAModifier.routed;
    console.log(this.magasin)
    
  }


  ModifMagasin(datas:NgForm){
    
    return this.service.ModifMagasin( datas.value,this.magasin.idMagasin).subscribe(data =>{
      console.log(data);
      if(data){

        this.snackbar.open('Modifié avec succès','!!!', {
          duration: 3000
      });

      datas.reset();
      this.route.navigate(['/magasin'])

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
