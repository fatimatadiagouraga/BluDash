import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { DriverComponent } from './driver/driver.component';
import { ParcComponent } from './parc/parc.component';
import { MagasinComponent } from './magasin/magasin.component';
import { TrajetComponent } from './trajet/trajet.component';
import { ColisComponent } from './colis/colis.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';


import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





import { AjoutDriverComponent } from './ajout-driver/ajout-driver.component';
import { ModifierDriverComponent } from './modifier-driver/modifier-driver.component';
import { AjoutParcComponent } from './ajout-parc/ajout-parc.component';
import { ModifierParcComponent } from './modifier-parc/modifier-parc.component';
import { AjoutMagasinComponent } from './ajout-magasin/ajout-magasin.component';
import { ModifierMagasinComponent } from './modifier-magasin/modifier-magasin.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { AdminComponent } from './admin/admin.component';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';
import { ModifAdminComponent } from './modif-admin/modif-admin.component';
import { AjoutTrajetComponent } from './ajout-trajet/ajout-trajet.component';
import { ModifTrajetComponent } from './modif-trajet/modif-trajet.component';
import { AjoutColisComponent } from './ajout-colis/ajout-colis.component';
import { ModifColisComponent } from './modif-colis/modif-colis.component';
import { TrajetEnCoursComponent } from './trajet-en-cours/trajet-en-cours.component';
import { ColisEnCoursComponent } from './colis-en-cours/colis-en-cours.component';
import { ColisMagasinComponent } from './colis-magasin/colis-magasin.component';
import { MenuComponent } from './menu/menu.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    DriverComponent,
    ParcComponent,
    MagasinComponent,
    TrajetComponent,
    ColisComponent,
    AcceuilComponent,
    AjoutDriverComponent,
    ModifierDriverComponent,
    AjoutParcComponent,
    ModifierParcComponent,
    AjoutMagasinComponent,
    ModifierMagasinComponent,
    CorbeilleComponent,
    AdminComponent,
    AjoutAdminComponent,
    ModifAdminComponent,
    AjoutTrajetComponent,
    ModifTrajetComponent,
    AjoutColisComponent,
    ModifColisComponent,
    TrajetEnCoursComponent,
    ColisEnCoursComponent,
    ColisMagasinComponent,
    MenuComponent,
    HeadComponent
  ],
  exports: [
    MatIconModule
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
