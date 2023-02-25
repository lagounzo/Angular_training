import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MichaelAccueilComponent } from './components/michael-accueil/michael-accueil.component';
import { ContactRachelleComponent } from './components/contact-rachelle/contact-rachelle.component';
import { AdjoumaniComponent } from './components/adjoumani/adjoumani.component';
import { FactureComponent } from './components/facture/facture.component';
import { FooterMicComponent } from './components/footer-mic/footer-mic.component';
import { FooterRachelleComponent } from './components/footer-rachelle/footer-rachelle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { FormulairerachComponent } from './components/formulairerach/formulairerach.component';
import { MonformulaireComponent } from './components/monformulaire/monformulaire.component';
import { ConsultationComponent } from './components/consultation/consultation.component';

@NgModule({
  declarations: [
    AppComponent,
    MichaelAccueilComponent,
    ContactRachelleComponent,
    AdjoumaniComponent,
    FactureComponent,
    FooterMicComponent,
    FooterRachelleComponent,
    FormComponent,
    FormulairerachComponent,
    MonformulaireComponent,
    ConsultationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // utiliser pour les formulaires reactifs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
