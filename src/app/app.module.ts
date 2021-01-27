import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertModule } from "ngx-foundation";
import { AppRoutingModule } from './app-routing.module';
import { TyperacerComponent } from './typeracer/typeracer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    TyperacerComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
