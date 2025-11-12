import {Component, OnInit} from '@angular/core';
import {EnseignantService} from '../services/enseignant-service';
import {ActivatedRoute,Router} from '@angular/router';
import {Enseignant} from '../model/enseignant.model';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Departement} from '../model/departement.model';


@Component({
  selector: 'app-update-enseignant',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './update-enseignant.html',
  styles: ``
})
export class UpdateEnseignant implements OnInit{
  currentEnseignant= new Enseignant();
  departements! : Departement[];
  updatedDepId! : number;
  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              private EnseignantService: EnseignantService) {
  }
  ngOnInit() {
    this.EnseignantService.ListeDepartement().
    subscribe(deps => {this.departements =deps._embedded.departements;
      console.log(deps);
    });

    this.EnseignantService.consulterEnseignant(this.activatedRoute.snapshot.params['id']).
    subscribe( ens =>{ this.currentEnseignant = ens;
      this.updatedDepId = this.currentEnseignant.departement.idDep!;

    } ) ;

  }
  updateEnseignant(){
    this.currentEnseignant.departement = this.departements.find(dep => dep.idDep == this.updatedDepId)!;
    this.EnseignantService.updateEnseignant(this.currentEnseignant).subscribe(ens => {
      this.router.navigate(['enseignants']); }
    );

  }

}
