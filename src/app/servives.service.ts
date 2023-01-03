import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServivesService {

  apiAdmin= 'http://localhost:8080/api/admins/';
  apiMagasin= 'http://localhost:8080/api/magasin/';
  apiParc= 'http://localhost:8080/api/parc/';
  apiColis= 'http://localhost:8080/api/colis/';
  apiTrajet= 'http://localhost:8080/api/trajet/';
  apiChauffeur= 'http://localhost:8080/api/users/';
  apiRegion= 'http://localhost:8080/api/';





  
  constructor(private http: HttpClient) { }

//Admin API

login(login :String,password : String, admin :any){
  return this.http.post(this.apiAdmin+"login?login="+login+"&password="+password,admin)
}

  AjouterAdmin(administrateur:any){
    return this.http.post(this.apiAdmin+'AddAdmin',administrateur)
  }

  ListAdminActif() {
    return this.http.get(this.apiAdmin+'AdminActif');
  }

  SupprimerAdmin(id:any){
    return this.http.delete(this.apiAdmin+'DeleteAdmin/'+id);
  }


  AdminById(id:any){
    return this.http.get(this.apiAdmin+'AdminById/'+id);
  }

  ModifAdmin(AdminModif:any, id:any){
    return this.http.put(this.apiAdmin+'UpdateAdmin/'+id, AdminModif);
  }

  nombre() {
    return this.http.get(this.apiAdmin+'nombre');
  }
  

  //Magasin API 

  ListMagasinTaff() {
    return this.http.get(this.apiMagasin+'MagasinTaff');
  }

  AjouterMagasin(magasin:any){
    return this.http.post(this.apiMagasin+'AddMagasin',magasin)
  }

  SupprimerMagasin(id:any){
    return this.http.delete(this.apiMagasin+'OutaffMagasin/'+id);
  }

  MagasinById(id:any){
    return this.http.get(this.apiMagasin+'MagasinById/'+id);
  }

  ModifMagasin(MagasinModif:any, id:any){
    return this.http.put(this.apiMagasin+'UpdateMagasin/'+id, MagasinModif);
  }

  // API Parc
  ListParcTaff() {
    return this.http.get(this.apiParc+'AllParcDepanne');
  }

  AjouterParc(parc:any){
    return this.http.post(this.apiParc+'AddParc',parc)
  }

  SupprimerParc(id:any){
    return this.http.delete(this.apiParc+'OutPArc/'+id);
  }

  ParcById(id:any){
    return this.http.get(this.apiParc+'ParcById/'+id);
  }

  ModifParc(ParcModif:any, id:any){
    return this.http.put(this.apiParc+'UpdateParc/'+id, ParcModif);
  }

  // API chauffeurs

  ListChauffeurActif() {
    return this.http.get(this.apiChauffeur+'ListChauffeurActif');
  }

  ListChauffeurDesactif() {
    return this.http.get(this.apiChauffeur+'ListChauffeurDesactif');
  }

  AjouterChauffeur(chauffeur:any){
    return this.http.post(this.apiChauffeur+'AddUserChauffeur',chauffeur)
  }

  livrer(id:any){
    return this.http.delete(this.apiColis+'LivrerColis/'+id);
  }

  magasin(id:any){
    return this.http.delete(this.apiColis+'MagasinColis/'+id);
  }

  ChauffeurById(id:any){
    return this.http.get(this.apiChauffeur+'UserById/'+id);
  }

  ModifChauffeur(ChauffeurModif:any, id:any){
    return this.http.put(this.apiChauffeur+'UpdateUser/'+id, ChauffeurModif);
  }

  SupprimerChauffeur(id:any){
    return this.http.delete(this.apiChauffeur+'DeleteUser/'+id);
  }

  //Magasinier

  ListMagasinierActif() {
    return this.http.get(this.apiChauffeur+'ListMagasinierActif');
  }
  
  AjouterMagasinier(magasinier:any){
    return this.http.post(this.apiChauffeur+'AddUserMagasinier',magasinier)
  }

  ModifMagasinier(MagasinierModif:any, id:any){
    return this.http.put(this.apiChauffeur+'UpdateUser/'+id, MagasinierModif);
  }

  MagasinierById(id:any){
    return this.http.get(this.apiChauffeur+'UserById/'+id);
  }


  //API colis  

  ListColisLivrer() {
    return this.http.get(this.apiColis+'AllColisLivrer'); 

  }

  ListColisEncours() {
    return this.http.get(this.apiColis+'AllColisEncours'); 

  }

  ListColisMagasin() {
    return this.http.get(this.apiColis+'AllColisMagasin'); 

  }

  AjouterColis(colis:any,id:any){
    return this.http.post(this.apiColis+'AddColisAdmin/'+id,colis);
  }

  ColisById(id:any){
    return this.http.get(this.apiColis+'ColisById/'+id);
  }

  ModifColis(ColisModif:any, id:any){
    return this.http.put(this.apiColis+'UpdateColis/'+id, ColisModif);
  }

  SupprimerColis(id:any){
    return this.http.delete(this.apiColis+'SuppColisAdmin/'+id);
  }

  ModifColisforAdd(ColisModif:any, id:any){
    return this.http.put(this.apiColis+'UpdateColisforAdd/'+id, ColisModif);
  }
  nombreEncours(){
    return this.http.get(this.apiColis+'nombreEncours'); 

  }
  nombreMagasin(){
    return this.http.get(this.apiColis+'nombreMagasin'); 

  }
  nombreLivrer(){
    return this.http.get(this.apiColis+'nombreLivrer'); 

  }

  //API trajet


  ListTrajetArriver() {
    return this.http.get(this.apiTrajet+'AllTrajetArrive'); 

  }

  ListTrajetEncours() {
    return this.http.get(this.apiTrajet+'AllTrajetEncours'); 

  }

  AjouterTrajet(trajet:any){
    return this.http.post("http://localhost:8080/api/trajet/AddTrajetByAdmin",trajet);
  }

  SupprimerTrajet(id:any){
    return this.http.delete(this.apiTrajet+'SuppTrajetForAdmin/'+id);
  }

  TrajetById(id:any){
    return this.http.get(this.apiTrajet+'TrajetById/'+id);
  }

  ModifTrajet(ModifTrajet:any, id:any){
    return this.http.put(this.apiTrajet+'UpdateUser/'+id,ModifTrajet);
  }

  //Api Region

  ListRegion(){
    return this.http.get(this.apiRegion+'AllRegion'); 

  }

  AjouterRegion(region:any){
    return this.http.post("http://localhost:8080/api/AddRegion",region);
  }

  SupprimerRegion(id:any){
    return this.http.delete(this.apiRegion+'DeleteRegion/'+id);
  }

  RegionById(id:any){
    return this.http.get(this.apiRegion+'RegionById/'+id);
  }

  ModifRegion(ModifRegion:any, id:any){
    return this.http.put(this.apiRegion+'UpdateRegion/'+id,ModifRegion);
  }


}
