import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { ServivesService } from '../servives.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import swal from 'sweetalert2';

@Component({
  selector: 'app-trajet-en-cours',
  templateUrl: './trajet-en-cours.component.html',
  styleUrls: ['./trajet-en-cours.component.scss']
})
export class TrajetEnCoursComponent implements OnInit{
  trajet: any;

  constructor(private Service :ServivesService,public snackbar:MatSnackBar,private route: Router,public dialogue :MatDialog,private routed:ActivatedRoute){}
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

}
