import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Enseignant } from '../model/enseignant.model';
import { EnseignantService } from '../services/enseignant-service';
import {Departement} from '../model/departement.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-enseignant',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-enseignant.html',
})
export class AddEnseignant implements OnInit {
  newEnseignant = new Enseignant();
  departements! :Departement[];
  newIdDep! : number;
  newDepartement! : Departement;
  message : string='' ;

  constructor(private enseignantService: EnseignantService,
                private  router :Router) {}

  ngOnInit() {
    this.enseignantService.ListeDepartement().
    subscribe(deps => {this.departements = deps._embedded.departements;
      console.log(deps);
    });
  }


  addEnseignant(){
    this.newEnseignant.departement = this.departements.find(ens => ens.idDep == this.newIdDep)!;
    this.enseignantService.ajouterEnseignant(this.newEnseignant)
      .subscribe(ens => {
        console.log(ens);
        this.router.navigate(['enseignants']);
      });
  }

}
