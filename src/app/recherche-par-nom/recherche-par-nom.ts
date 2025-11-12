import {Component, OnInit} from '@angular/core';
import {CommonModule, DatePipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Enseignant} from '../model/enseignant.model';
import {EnseignantService} from '../services/enseignant-service';
import {SearchFilterPipe} from '../search-filter-pipe';

@Component({
  selector: 'app-recherche-par-nom',
    imports: [
      FormsModule,
      CommonModule,
      DatePipe,
      ReactiveFormsModule,
      SearchFilterPipe
    ],
  templateUrl: './recherche-par-nom.html',
  styles: ``
})
export class RechercheParNom  implements OnInit{
  nomEnseignant! :string;
  enseignants! :Enseignant[];
  allEnseignants!:Enseignant[];
  searchTerm!:string;
  constructor(private enseignantService:EnseignantService) {

  }
  ngOnInit(): void {
    this.enseignantService.listeEnseignant().subscribe(ens => {
      console.log(ens);
      this.enseignants = ens;
    });
   /*this.enseignantService.listeEnseignant().subscribe(ens => {
      console.log(ens);
      this.allEnseignants = ens;
    });*/

    this.enseignants=[];
  }


  rechercherEns() {
    if(this.nomEnseignant)
        this.enseignantService.rechercherParNom(this.nomEnseignant).subscribe(ens => {
        console.log(ens);
        this.enseignants = ens;});
        else
        this.enseignantService.listeEnseignant().subscribe(ens => {
            console.log(ens);
            this.enseignants = ens;
    });
  }
  onKeyUp(filterText : string){
    this.enseignants= this.allEnseignants.filter(item =>
      item.nomComplet.toLowerCase().includes(filterText));}

  }

