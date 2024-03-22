import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { VerEmpleadosComponent } from './ver-empleados/ver-empleados.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { LandingEmpleadosComponent } from './landing-empleados/landing-empleados.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    CrearEmpleadoComponent,
    LandingEmpleadosComponent,
    VerEmpleadosComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,MatDatepickerModule,MatFormFieldModule,MatIconModule,MatInputModule,MatNativeDateModule,
    MatButtonModule,MatDividerModule,MatTableModule
  ]
})
export class LandingModule { }
