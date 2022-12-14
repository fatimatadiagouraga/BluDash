import { Component,Inject,OnInit } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServivesService } from '../servives.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-parc',
  templateUrl: './modifier-parc.component.html',
  styleUrls: ['./modifier-parc.component.scss']
})
export class ModifierParcComponent implements OnInit {
  parc: any;
  constructor(@Inject(MAT_DIALOG_DATA) public parcAModifier: any,
  private service:ServivesService,
  public snackbar:MatSnackBar,
  public dialogue:MatDialog,
  private route:Router,
  private routed:ActivatedRoute){}

  ngOnInit(): void {

    this.parc= this.parcAModifier.routed;
    console.log(this.parc)
    
  }

  ModifParc(datas:NgForm){
    
    return this.service.ModifParc( datas.value,this.parc.idParc).subscribe(data =>{
      console.log(data);
      if(data){

        this.snackbar.open('Modifié avec succès','!!!', {
          duration: 3000
      });

      datas.reset();
      this.route.navigate(['/parc'])

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
