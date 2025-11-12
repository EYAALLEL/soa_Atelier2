import {Component, OnInit} from '@angular/core';
import {CommandModuleError} from '@angular/cli/src/command-builder/command-module';
import {CommonModule, DatePipe} from '@angular/common';
import {Enseignant} from '../model/enseignant.model';
import {EnseignantService} from '../services/enseignant-service';
import {RouterLink} from '@angular/router';
import {Auth} from '../services/auth';

@Component({
  selector: 'app-enseignant',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './enseignants.html',
})
export class Enseignants implements  OnInit{
  enseignants ? : Enseignant[];




  constructor(private EnseignantService:EnseignantService,
  public authService: Auth) {

  }
  ngOnInit() {
    this.chargerEnseignant()

  }
  chargerEnseignant(){
    this.EnseignantService.listeEnseignant().subscribe(ens => {
      console.log(ens);
      this.enseignants = ens;
    });
  }
  supprimerEnseignant(e: Enseignant)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.EnseignantService.supprimerEnseignant(e.idEnseignant).subscribe(() => {
        console.log("enseignant supprimé");
        this.chargerEnseignant();
      });
  }



}
