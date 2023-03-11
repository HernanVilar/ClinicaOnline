import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CargarhoraespecialistaService } from 'src/app/services/cargarhoraespecialista.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';

@Component({
  selector: 'app-perfil-administrador',
  templateUrl: './perfil-administrador.component.html',
  styleUrls: ['./perfil-administrador.component.css']
})
export class PerfilAdministradorComponent implements OnInit {
  
  arrayhoraaa:any = [];
  datoUsuario:any = [];
  cargo:boolean = false;
  constructor(public auth:AuthService,private sv:RegistrarUsuariosService,private fb:FormBuilder,private es:CargarhoraespecialistaService,private h:HistoriaClinicaService) 
  {
    this.sv.getAll().get().subscribe(e=>{e.forEach(ese=>{
      if(ese.data().email == this.auth.correologeado)
      {
        this.cargo = true;
        this.datoUsuario = ese.data();
      }

   })})
    
  }

  ngOnInit(): void {
  }

}
