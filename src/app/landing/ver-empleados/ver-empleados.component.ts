import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  idEmpleado: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {idEmpleado: 1, weight: 1.0079,name: 'Carlos', symbol: 'Cedula'},
  {idEmpleado: 2, weight: 4.0026,name: 'Juan', symbol: 'Pasaporte'},

];

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.css']
})
export class VerEmpleadosComponent {
  displayedColumns: string[] = ['idEmpleado', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
