import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { CantturnosespecialidadComponent } from './cantturnosespecialidad/cantturnosespecialidad.component';
import { CantturnosdiaComponent } from './cantturnosdia/cantturnosdia.component';
import { TurnosolicitadolapsoComponent } from './turnosolicitadolapso/turnosolicitadolapso.component';
import { TurnofinalizadolapsoComponent } from './turnofinalizadolapso/turnofinalizadolapso.component';
import { FormsModule } from '@angular/forms';
import { FechaDirectivaDirectiveDirective } from '../directivas/fecha-directiva-directive.directive';
import { LargoMaximoDirective } from '../directivas/largo-maximo.directive';
import { SoloNumerosDirective } from '../directivas/solo-numeros.directive';
import { OrdenarlogsPipe } from '../pipes/ordenarlogs.pipe';
import { SegundoPipe } from '../pipes/segundo.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TerceroPipe } from '../pipes/tercero.pipe';
import { PruebaComponent } from './prueba/prueba.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    IngresosComponent,
    CantturnosespecialidadComponent,
    CantturnosdiaComponent,
    TurnosolicitadolapsoComponent,
    TurnofinalizadolapsoComponent,
    OrdenarlogsPipe,
    SegundoPipe,
    TerceroPipe,
    FechaDirectivaDirectiveDirective,
    LargoMaximoDirective,
    SoloNumerosDirective,
    PruebaComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    LogsRoutingModule,
    ScrollingModule
  ]
})
export class LogsModule { }
