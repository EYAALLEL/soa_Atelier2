import {Component, OnInit} from '@angular/core';
import {Departement} from '../model/departement.model';
import{UpdateDepartement} from '../update-departement/update-departement';
import {EnseignantService} from '../services/enseignant-service';

@Component({
  selector: 'app-liste-departements',
  imports: [UpdateDepartement],
  templateUrl: './liste-departements.html',
  styles: ``
})
export class ListeDepartements implements  OnInit {
  departements!: Departement[];
  updatedDep:Departement = {"idDep":null,"nomDep":"","descriptionDep":""};
  ajout:boolean=true;



  constructor(private enseignantService: EnseignantService) {
  }

  ngOnInit(): void {
    this.chargerDepartement()

  }
  chargerDepartement(){

    this.enseignantService.ListeDepartement().subscribe(deps => {
      this.departements = deps._embedded.departements;
      console.log(deps);
    });

  }
  departementUpdated(dep:Departement){

    this.enseignantService.ajouterDepartement(dep).
    subscribe( ()=> this.chargerDepartement());


  }
  updateDep(dep:Departement){
    this.updatedDep=dep;
    this.ajout=false;

  }
}
