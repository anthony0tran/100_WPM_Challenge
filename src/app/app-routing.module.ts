import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TyperacerComponent } from "./views/typeracer/typeracer.component";
import {PortfolioComponent} from "./views/portfolio/portfolio.component";
import {FitnessComponent} from "./views/fitness/fitness.component";

const routes: Routes = [
  { path: '', component: PortfolioComponent},
  { path: 'typeracer', component: TyperacerComponent},
  { path: 'fitness', component: FitnessComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
