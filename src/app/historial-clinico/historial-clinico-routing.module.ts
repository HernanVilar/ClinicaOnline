import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaClinicaGeneralComponent } from './historia-clinica-general/historia-clinica-general.component';


const routes: Routes = [
  {path :'',component:HistoriaClinicaGeneralComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialClinicoRoutingModule { }
