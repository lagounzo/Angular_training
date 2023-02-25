import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdjoumaniComponent } from './components/adjoumani/adjoumani.component';
import { ContactRachelleComponent } from './components/contact-rachelle/contact-rachelle.component';
import { FactureComponent } from './components/facture/facture.component';
import { FormComponent } from './components/form/form.component';
import { MichaelAccueilComponent } from './components/michael-accueil/michael-accueil.component';

const routes: Routes = [
  {
    path: 'michael-ac', component: MichaelAccueilComponent
  },
 {
  path:'contact-rachelle',component: ContactRachelleComponent
 },
 {
  path: 'daniel-atos', component: AdjoumaniComponent
 },
 {
  path: 'facture', component: FactureComponent
 }
 ,
 {
  path: 'form', component: FormComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
