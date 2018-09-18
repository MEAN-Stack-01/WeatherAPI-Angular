import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { WashingtonComponent } from './washington/washington.component';

const routes: Routes = [
  {path: 'burbank',component : BurbankComponent },
  {path: 'seattle',component : SeattleComponent },
  {path: 'chicago',component : ChicagoComponent },
  {path: 'dallas',component : DallasComponent },
  {path: 'sanjose',component : SanjoseComponent },
  {path: 'washington',component : WashingtonComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
