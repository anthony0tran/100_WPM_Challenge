import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatListModule,
    MatStepperModule,
    MatToolbarModule,
    MatInput,
    MatInputModule,
    MatSnackBarModule, MatTooltipModule
} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ShareComponent } from './components/share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    ShareComponent
  ],
  entryComponents: [RegisterComponent, ShareComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatDialogModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatTooltipModule
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
