import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { LandingComponent } from './landing/landing.component';
import { VerSolicitudComponent } from './ver-solicitud/ver-solicitud.component';
import { VerEmpleadosComponent } from './ver-empleados/ver-empleados.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
const routes: Routes = [
  {
    path:'',
    component: LandingComponent,
    children: [
      {
        path:'',
        component: VerSolicitudComponent
      },
      {
        path:'crearSolicitud',
        component: CrearSolicitudComponent
      },
      {
        path:'verEmpleados',
        component: VerEmpleadosComponent
      },
      {
        path:'crearEmpleados',
        component: CrearEmpleadoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
