import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MemeComponent } from './meme/meme.component';
import { MemeFormComponent } from './meme-form/meme-form.component';
//importamos las animaciones de angular.io una vez puesto aqui estan disponibles para todas las app
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    MemeComponent,
    MemeFormComponent
  ],
  imports: [                //una vez aqui estará disponible para todas las aplicaciones
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
