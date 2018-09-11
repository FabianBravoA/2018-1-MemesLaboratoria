import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MemeComponent } from './meme/meme.component';
import { MemeFormComponent } from './meme-form/meme-form.component';
//importamos las animaciones de angular.io una vez puesto aqui estan disponibles para todas las app
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MemeComponent,
    MemeFormComponent,
    AuthFormComponent
  ],
  imports: [                //una vez aqui estará disponible para todas las aplicaciones
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatSnackBarModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
