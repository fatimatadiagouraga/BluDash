import { Component,OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import swal from 'sweetalert2';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit{
  administrateurs: any;
  colisEncours: any;
  colisMagasin: any;
  colisLivrer: any;

  constructor(private Service :ServivesService,public snackbar:MatSnackBar) { }

  ngOnInit(): void {
   this.nombreAdmin();
  
  }

  nombreAdmin(){
    return this.Service.nombre().subscribe(data => {
      this.administrateurs =data;
      console.log("ssssssssssss")
      console.log(this.administrateurs);
     
    });
  }
  nombreColisEncours(){
    return this.Service.nombreEncours().subscribe(data => {
      this.colisEncours =data;
      console.log(this.colisEncours);
     
    });
  }

  nombreColisMagasin(){
    return this.Service.nombreMagasin().subscribe(data => {
      this.colisMagasin =data;
      console.log(this.colisMagasin);
     
    });
  }
  nombreColisLivrer(){
    return this.Service.nombreLivrer().subscribe(data => {
      this.colisLivrer =data;
      console.log(this.colisLivrer);
     
    });
  }


}
