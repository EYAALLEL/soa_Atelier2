import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Departement} from '../model/departement.model';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-update-departement',
  imports: [CommonModule,FormsModule],
  templateUrl: './update-departement.html',
  styles: ``
})
export class UpdateDepartement implements OnInit{
  @Input()
  departement! : Departement;
  @Input()
  ajout!:boolean;

  @Output()
  departementUpdated = new EventEmitter<Departement>();

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.departement);
  }
  saveDepartement(){
    this.departementUpdated.emit(this.departement);

  }


}
