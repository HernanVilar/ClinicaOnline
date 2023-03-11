import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  pa:any = "Hola"
  paciente:boolean = false;
  especialista:boolean = false;
  constructor(public auth:AuthService) 
  {
    console.log(auth.administrador);
    
  }

  ngOnInit(): void { 
  }
  aceptar(data:string)
  {
    if(data == 'especialista')
    {
      this.especialista = true;
    }
    else
    {
      this.paciente = true;
    }
  }

  cambiar(data:boolean)
  {
    this.paciente = false;
    this.especialista = false;
  }
}
