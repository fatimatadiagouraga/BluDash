import { Component ,Inject, OnInit} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServivesService } from '../servives.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modif-colis',
  templateUrl: './modif-colis.component.html',
  styleUrls: ['./modif-colis.component.scss']
})
export class ModifColisComponent implements OnInit {
  colis: any;
  trajet: any;
  constructor(@Inject(MAT_DIALOG_DATA) public colisAModifier: any,private service:ServivesService,
  public snackbar:MatSnackBar,
  public dialogue:MatDialog,private route:Router,private routed:ActivatedRoute){}

  ngOnInit(): void {

    this.listTrajetEncours();
    this.colis= this.colisAModifier.routed;
    console.log(this.colis)
    
  }

  listTrajetEncours(){
    return this.service.ListTrajetEncours().subscribe(data => {
      this.trajet=data;
      console.log(this.trajet);
     
    });
  }

  ModifColis(datas:NgForm){
    datas.value.trajet={"idTrajet" : datas.value['trajet']}
    
    return this.service.ModifColis( datas.value,this.colis.idColis).subscribe(data =>{
      console.log(data);
      if(data){

        this.snackbar.open('Modifié avec succès','!!!', {
          duration: 3000
      });

      datas.reset();
      this.route.navigate(['/colis'])

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
