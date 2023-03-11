import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialClinicoRoutingModule } from './historial-clinico-routing.module';
import { HistoriaClinicaGeneralComponent } from './historia-clinica-general/historia-clinica-general.component';
import { FormsModule } from '@angular/forms';
import { BusquedaHistorialPipe } from '../pipes/busqueda-historial.pipe';

@NgModule({
  declarations: [
    HistoriaClinicaGeneralComponent,
    BusquedaHistorialPipe
  ],
  imports: [
    CommonModule,
    HistorialClinicoRoutingModule,
    FormsModule
  
  ]
})
export class HistorialClinicoModule { }
