import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiperfilRoutingModule } from './miperfil-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule } from '@angular/forms';
import { PerfilpacienteComponent } from './perfilpaciente/perfilpaciente.component';
import { PerfilEspecialistaComponent } from './perfil-especialista/perfil-especialista.component';
import { HistoriaClinicaGeneralComponent } from '../historial-clinico/historia-clinica-general/historia-clinica-general.component';
import { HistorialClinicoModule } from '../historial-clinico/historial-clinico.module';
import { PerfilAdministradorComponent } from './perfil-administrador/perfil-administrador.component';

@NgModule({
  declarations: [
    PerfilComponent,
    PerfilpacienteComponent,
    PerfilEspecialistaComponent,
    PerfilAdministradorComponent,
  
  ],
  imports: [
    FormsModule,
    CommonModule,
    MiperfilRoutingModule,

    
  ]
})
export class MiperfilModule { }
