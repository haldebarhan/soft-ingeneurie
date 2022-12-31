import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RouterModule, Routes } from '@angular/router';
import { SolutionHotelComponent } from './components/solution-hotel/solution-hotel.component';
import { SolutionLocativeComponent } from './components/solution-locative/solution-locative.component';
import { SolutionImmobiliereComponent } from './components/solution-immobiliere/solution-immobiliere.component';
import { SolutionCaisseComponent } from './components/solution-caisse/solution-caisse.component';
import { SolutionApproDistComponent } from './components/solution-appro-dist/solution-appro-dist.component';
import { SolutionGestionCreditComponent } from './components/solution-gestion-credit/solution-gestion-credit.component';
import { SolutionTranfertArgentComponent } from './components/solution-tranfert-argent/solution-tranfert-argent.component';
import { SolutionAssuranceMaladieComponent } from './components/solution-assurance-maladie/solution-assurance-maladie.component';
import { SolutionArchiBetComponent } from './components/solution-archi-bet/solution-archi-bet.component';
import { SolutionSuiviArchitecteComponent } from './components/solution-suivi-architecte/solution-suivi-architecte.component';
import { SolutionSuiviEntrepreneurComponent } from './components/solution-suivi-entrepreneur/solution-suivi-entrepreneur.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SolutionVenteCommerciauxComponent } from './components/solution-vente-commerciaux/solution-vente-commerciaux.component';
import { DemoComponent } from './components/demo/demo.component';
import { CotationComponent } from './components/cotation/cotation.component';
import { EssaiComponent } from './components/essai/essai.component';
import { ServiceComponent } from './components/service/service.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'solution/locative', component: SolutionLocativeComponent},
  {path: 'solution/hotel', component: SolutionHotelComponent},
  {path: 'solution/immobiliere', component: SolutionImmobiliereComponent},
  {path: 'solution/caisse', component: SolutionCaisseComponent},
  {path: 'solution/appro', component: SolutionApproDistComponent},
  {path: 'solution/credit', component: SolutionGestionCreditComponent},
  {path: 'solution/transfert', component: SolutionTranfertArgentComponent},
  {path: 'solution/assurance', component: SolutionAssuranceMaladieComponent},
  {path: 'solution/archi', component: SolutionArchiBetComponent},
  {path: 'solution/suiviarch', component: SolutionSuiviArchitecteComponent},
  {path: 'solution/suivientr', component: SolutionSuiviEntrepreneurComponent},
  {path: 'solution/vente', component: SolutionVenteCommerciauxComponent},
  {path: 'societe', component: AboutUsComponent},
  {path: 'demo', component: DemoComponent},
  {path: 'service', component: ServiceComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    HomeComponentComponent,
    SolutionHotelComponent,
    SolutionLocativeComponent,
    SolutionImmobiliereComponent,
    SolutionCaisseComponent,
    SolutionApproDistComponent,
    SolutionGestionCreditComponent,
    SolutionTranfertArgentComponent,
    SolutionAssuranceMaladieComponent,
    SolutionArchiBetComponent,
    SolutionSuiviArchitecteComponent,
    SolutionSuiviEntrepreneurComponent,
    AboutUsComponent,
    SolutionVenteCommerciauxComponent,
    DemoComponent,
    CotationComponent,
    EssaiComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
