import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MemeComponent } from './meme/meme.component';
import { MemeFormComponent } from './meme-form/meme-form.component';
//importamos las animaciones de angular.io una vez puesto aqui estan disponibles para todas las app
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AuthService } from './auth.service';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { MemeFeedComponent } from './meme-feed/meme-feed.component';
//se crea una variable tipo Routes
const appRoutes: Routes = [ // ruta + componente
  {
    path : '',//si no pone nada es la ruta principal
    component : MemeFeedComponent
  },
  {
    path: 'feed',
    component: MemeFeedComponent
  },
  {
    path: 'new',
    component: MemeFormComponent
  },
  {
    path: 'meme/:id',
    component: MemeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MemeComponent,
    MemeFormComponent,
    AuthFormComponent,
    MemeFeedComponent
  ],
  imports: [                //una vez aqui estará disponible para todas las aplicaciones
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes),//ruta
    MatToolbarModule,
    MatButtonModule,
    AngularFireDatabaseModule
],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
