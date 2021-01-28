import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertModule } from "ngx-foundation";
import { AppRoutingModule } from './app-routing.module';
import { TyperacerComponent } from './typeracer/typeracer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TyperacerComponent,
    PortfolioComponent,
    SideMenuComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
