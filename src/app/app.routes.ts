import { Routes } from '@angular/router';
import {Enseignants} from './enseignants/enseignants';
import {AddEnseignant} from './add-enseignant/add-enseignant';
import {UpdateEnseignant} from './update-enseignant/update-enseignant';
import {RechercheParDepartement} from './recherche-par-departement/recherche-par-departement';
import {RechercheParNom} from './recherche-par-nom/recherche-par-nom';
import {ListeDepartements} from './liste-departements/liste-departements';
import {Login} from './login/login';
import {Forbidden} from './forbidden/forbidden';
import {enseignantGuard} from './enseignant-guard';

export const routes: Routes = [
  {path: "enseignants", component : Enseignants},
  {path: "add-enseignant", component : AddEnseignant,canActivate:[enseignantGuard]},
  {path: "", redirectTo: "enseignants", pathMatch: "full"},
  {path: "updateEnseignant/:id", component: UpdateEnseignant},
  {path: "rechercheParDepartement", component : RechercheParDepartement},
  {path: "rechercheParNom", component : RechercheParNom},
  {path: "listeDepartements", component : ListeDepartements},
  {path: 'login', component: Login},
  {path: 'app-forbidden', component: Forbidden},





];
