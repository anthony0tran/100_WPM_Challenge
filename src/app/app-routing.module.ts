import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TyperacerComponent } from "./typeracer/typeracer.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const routes: Routes = [
  { path: '', component: PortfolioComponent},
  { path: 'typeracer', component: TyperacerComponent}
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
