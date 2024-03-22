import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciarSesionComponent } from './landing/iniciar-sesion/iniciar-sesion.component';
import { CrearSolicitudComponent } from './landing/crear-solicitud/crear-solicitud.component';
import { VerSolicitudComponent } from './landing/ver-solicitud/ver-solicitud.component';
import { LandingComponent } from './landing/landing/landing.component';


import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    CrearSolicitudComponent,
    VerSolicitudComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatSliderModule,
    MatFormFieldModule,MatInputModule,MatDatepickerModule,MatTableModule
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
