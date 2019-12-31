import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
