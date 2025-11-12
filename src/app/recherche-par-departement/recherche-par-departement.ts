import { Component } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {Enseignant} from '../model/enseignant.model';
import {Departement} from '../model/departement.model';
import {FormsModule} from '@angular/forms';
import {EnseignantService} from '../services/enseignant-service';

@Component({
  selector: 'app-recherche-par-departement',
  imports: [
    DatePipe,
    CommonModule,
    FormsModule
  ],
  templateUrl: './recherche-par-departement.html',
  styles: ``
})
export class RechercheParDepartement {
  enseignants !: Enseignant[] ;
  IdDepartement! : number;
  departements! : Departement[];
  constructor(private enseignantService :EnseignantService) {
  }
  ngOnInit(): void {
    this.enseignantService.ListeDepartement().
    subscribe(deps => {this.departements = deps._embedded.departements;
      console.log(deps);
    });
  }

  onChange() {
    this.enseignantService.rechercherParDepartement(this.IdDepartement).
    subscribe(ens =>{this.enseignants=ens});
  }

}
