import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminComponent } from './admin/admin.component';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';
import { AjoutMagasinComponent } from './ajout-magasin/ajout-magasin.component';
import { AjoutMagasinierComponent } from './ajout-magasinier/ajout-magasinier.component';
import { AjoutParcComponent } from './ajout-parc/ajout-parc.component';
import { ColisComponent } from './colis/colis.component';
import { DriverComponent } from './driver/driver.component';
import { ListMagasinierComponent } from './list-magasinier/list-magasinier.component';
import { LoginComponent } from './login/login.component';
import { MagasinComponent } from './magasin/magasin.component';
import { ModifAdminComponent } from './modif-admin/modif-admin.component';
import { ModifMagasinierComponent } from './modif-magasinier/modif-magasinier.component';
import { ModifierMagasinComponent } from './modifier-magasin/modifier-magasin.component';
import { ModifierParcComponent } from './modifier-parc/modifier-parc.component';
import { ParcComponent } from './parc/parc.component';
import { TrajetComponent } from './trajet/trajet.component';


const routes: Routes = [


  { path:'',   redirectTo: 'log', pathMatch: 'full' },
  { path:'log', component:LoginComponent},
  { path:'acceuil', component: AcceuilComponent},
  { path:'admin', component: AdminComponent},
  { path:'driver', component: DriverComponent},
  { path:'colis', component:ColisComponent},
  { path:'trajet', component: TrajetComponent},
  { path:'parc', component: ParcComponent},
  { path:'magasin', component: MagasinComponent},
  { path:'ajoutAdmin', component: AjoutAdminComponent},
  { path:'ajoutMagasin', component: AjoutMagasinComponent},
  { path:'ajoutParc', component: AjoutParcComponent},
  { path:'modifAdmin', component: ModifAdminComponent},
  { path:'modifParc', component: ModifierParcComponent},
  { path:'modifMagasin', component: ModifierMagasinComponent},
  { path:'ajoutMagasinier', component: AjoutMagasinierComponent},
  { path:'listMagasinier', component: ListMagasinierComponent},
  { path:'modifMagasinier', component: ModifMagasinierComponent},





];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
