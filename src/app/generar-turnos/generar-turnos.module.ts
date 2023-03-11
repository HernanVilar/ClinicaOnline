import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerarTurnosRoutingModule } from './generar-turnos-routing.module';
import { TurnosprincipalComponent } from './turnosprincipal/turnosprincipal.component';
import { ElegirEspecialistaComponent } from './elegir-especialista/elegir-especialista.component';
import { ElegirEspecialidadComponent } from './elegir-especialidad/elegir-especialidad.component';
import { ElegirHorariosComponent } from './elegir-horarios/elegir-horarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SoloadminComponent } from './soloadmin/soloadmin.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { BusquedaHistorialAdminPipe } from '../pipes/busqueda-historial-admin.pipe';



@NgModule({
  declarations: [
    TurnosprincipalComponent,
    ElegirEspecialistaComponent,
    ElegirEspecialidadComponent,
    ElegirHorariosComponent,
    SoloadminComponent,
    BusquedaHistorialAdminPipe
  ],
  imports: [
    CommonModule,
    GenerarTurnosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule

  ]
})
export class GenerarTurnosModule { }
