import {Departement} from './departement.model';

export class Enseignant{
  idEnseignant! :number;
  nomComplet! : string;
  salaire! :number;
  dateRecrutement! :Date;
  departement !:Departement;
}
