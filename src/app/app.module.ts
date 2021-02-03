import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertModule } from "ngx-foundation";
import { AppRoutingModule } from './app-routing.module';
import { TyperacerComponent } from './views/typeracer/typeracer.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import {HttpClientModule} from "@angular/common/http";
import { FitnessComponent } from './views/fitness/fitness.component';
import { UserStatsCardComponent } from './views/typeracer/user-stats-card/user-stats-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TyperacerComponent,
    PortfolioComponent,
    SideMenuComponent,
    TopBarComponent,
    FitnessComponent,
    UserStatsCardComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
