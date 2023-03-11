import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  obj1:any = "#007bff";
  obj2:any = "";
  obj3:any = "";
  obj4:any = "";
  obj5:any = "";
  ingresos:boolean = true;
  cantturnos:boolean = false;
  cantturnosdia:boolean = false;
  turnostiempo:boolean = false;
  turnostiempofinalizados:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  clickeado(data:string)
  {
    if(data == 'ingresos')
    {
      this.obj1 = "#007bff";
      this.obj2 = "";
      this.obj3 = "";
      this.obj4 = "";
      this.obj5 = "";
      this.ingresos = true;
      this.cantturnos = false;
      this.cantturnosdia = false;
      this.turnostiempo = false;
      this.turnostiempofinalizados = false;
    }
    if(data == 'turnosespecialidad')
    {
      this.obj1 = "";
      this.obj2 = "#007bff";
      this.obj3 = "";
      this.obj4 = "";
      this.obj5 = "";
      this.ingresos = false;
      this.cantturnos = true;
      this.cantturnosdia = false;
      this.turnostiempo = false;
      this.turnostiempofinalizados = false;
    }
    if(data == 'turnosdia')
    {
      this.obj1 = "";
      this.obj2 = "";
      this.obj3 = "#007bff";
      this.obj4 = "";
      this.obj5 = "";
      this.ingresos = false;
      this.cantturnos = false;
      this.cantturnosdia = true;
      this.turnostiempo = false;
      this.turnostiempofinalizados = false;
    }
    if(data == 'turnossolicitadolapso')
    {
      this.obj1 = "";
      this.obj2 = "";
      this.obj3 = "";
      this.obj4 = "#007bff";
      this.obj5 = "";
      this.ingresos = false;
      this.cantturnos = false;
      this.cantturnosdia = false;
      this.turnostiempo = true;
      this.turnostiempofinalizados = false;
    }
    if(data == 'turnosfiinalizadolapso')
    {
      this.obj1 = "";
      this.obj2 = "";
      this.obj3 = "";
      this.obj4 = "";
      this.obj5 = "#007bff";
      this.ingresos = false;
      this.cantturnos = false;
      this.cantturnosdia = false;
      this.turnostiempo = false;
      this.turnostiempofinalizados = true;
    }
  }
}
