import { Injectable } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';
import { Departement } from '../model/departement.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {apiURL, apiURLDep} from '../config';
import {DepartementWrapper} from '../model/departementWrapped.model';
import {Auth} from './auth';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  enseignants: Enseignant[] = [];
  //departements: Departement[] = [];


  constructor(private http : HttpClient,  private authService:Auth  ) {


    /*this.departements = [
      {
        idDep: 1,
        nomDep: "Informatique",
        descriptionDep: "Département spécialisé dans le développement logiciel, les réseaux et les nouvelles technologies."
      },
      {
        idDep: 2,
        nomDep: "Génie Civil",
        descriptionDep: "Département dédié à la conception, la construction et la maintenance des infrastructures et bâtiments."
      }
    ];*/

    /*this.enseignants = [
      {
        idEnseignant: 1,
        nomComplet: "Allel Eya",
        salaire: 3000.6,
        dateRecrutement: new Date("2011-01-14"),
        departement:
          {
            idDep: 2,
            nomDep: "Génie Civil",
            descriptionDep: "Département dédié à la conception, la construction et la maintenance des infrastructures et bâtiments."
          }
      },
      {
        idEnseignant: 2,
        nomComplet: "Allel Aziz",
        salaire: 4000,
        dateRecrutement: new Date("2015-05-14"),
        departement:
          {
            idDep: 2,
            nomDep: "Génie Civil",
            descriptionDep: "Département dédié à la conception, la construction et la maintenance des infrastructures et bâtiments."
          }
      },
      {
        idEnseignant: 3,
        nomComplet: "Allel Jessem",
        salaire: 4000,
        dateRecrutement: new Date("2013-09-25"),
        departement: {
          idDep: 1,
          nomDep: "Informatique",
          descriptionDep: "Département spécialisé dans le développement logiciel, les réseaux et les nouvelles technologies."
        },
      }
    ];*/
  }


  listeEnseignant(): Observable<Enseignant[]>{

    return this.http.get<Enseignant[]>(apiURL+"/all");

  }



  ajouterEnseignant( ens: Enseignant):Observable<Enseignant>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Enseignant>(apiURL+"/addens",ens, {headers:httpHeaders});
  }


  supprimerEnseignant(id : number) {
      const url = `${apiURL}/deletens/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.delete(url, {headers:httpHeaders});

    }


  consulterEnseignant(id: number): Observable<Enseignant> {
    const url = `${apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Enseignant>(url,{headers:httpHeaders});
  }



  updateEnseignant(ens:Enseignant) : Observable<Enseignant>
  {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Enseignant>(apiURL+"/updatens",ens, {headers:httpHeaders});
  }


  ListeDepartement():Observable<DepartementWrapper>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<DepartementWrapper>(apiURLDep,{headers:httpHeaders}
    );

  }
  rechercherParDepartement(idDep: number):Observable< Enseignant[]> {
    const url = `${apiURL}/ensdep/${idDep}`;
    return this.http.get<Enseignant[]>(url);
  }
  rechercherParNom(nom: string):Observable< Enseignant[]> {
    const url = `${apiURL}/ensByName/${nom}`;
    return this.http.get<Enseignant[]>(url);
  }
  ajouterDepartement( dep: Departement):Observable<Departement>{
    return this.http.post<Departement>(apiURLDep, dep, httpOptions);
  }





}
