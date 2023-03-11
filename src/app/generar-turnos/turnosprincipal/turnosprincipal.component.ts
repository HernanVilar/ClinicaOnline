import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CargarhoraespecialistaService } from 'src/app/services/cargarhoraespecialista.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';

@Component({
  selector: 'app-turnosprincipal',
  templateUrl: './turnosprincipal.component.html',
  styleUrls: ['./turnosprincipal.component.css']
})
export class TurnosprincipalComponent implements OnInit {
  pacienteactual:any;
  mostrarespecialidadadmin:boolean = false;
  boolespecialidad:boolean = true;
  boolespecialista:boolean = false;
  boolhorarios:boolean = false;
  especialidad:any;
  usuarios:any = [];
  objbuscar:any;
  list:any = [];
  verdadero:boolean = false;
  b:any;
  cambioo:any = 1;
  fondo:any = "background-color-red"
  @ViewChild('ancla') aca: ElementRef;
  constructor(private cargarhora:CargarhoraespecialistaService,public auth:AuthService,public registrar:RegistrarUsuariosService) 
  {
   
   }

  ngOnInit(): void {
  }
  recibir(data:any)
  {
    
    this.boolespecialidad = false;
    this.boolespecialista = true;
    console.log(this.boolespecialista);
    
    this.especialidad = data;
    this.cargarhora.getAll().valueChanges().subscribe((e:any)=>{
      
      this.usuarios = [];
      for(let i=0; i<e.length;i++)
      {     
        if(e[i].especialidad == this.especialidad)
        {
          this.usuarios.push(e[i]);
        }
      } 
    })
    this.verdadero = true;
    
  }
  objectomodificar(data:any)
  {
    this.objbuscar = data;
    this.boolhorarios = true;
  }
  pacienteadmin(data:any)
  {
    this.pacienteactual = data;
  
      this.mostrarespecialidadadmin = true;

      this.cambioo = this.cambioo + 1;
    console.log(data);
    this.fondo = "";
  }
   visibilidad(selector, visible) {
    var elemento = document.querySelector(selector);
    console.log(elemento);
    if (elemento != null) {
      elemento.style.display = visible?'block':'none';
    }
  }
  

}
