import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';

@Component({
  selector: 'app-historia-clinica-general',
  templateUrl: './historia-clinica-general.component.html',
  styleUrls: ['./historia-clinica-general.component.css']
})
export class HistoriaClinicaGeneralComponent implements OnInit {

  b:any = '';
  list:any = [];
  activo:boolean = false;
  constructor(sv:HistoriaClinicaService,public auth:AuthService) 
  {
    //si está logeado como administrador muestro todo.
    if(auth.especialista)
    {
      let pec = sv.getAll().valueChanges().subscribe(e=>{
        this.list = [];
        for(let i = 0; i<e.length;i++)
        {
     
          
          if(e[i].correoespecialista == this.auth.correologeado)
          {
            this.list.push(e[i]);
          }
        }
        this.activo = true;
        console.log(this.list);
        
       })
    }
    else
    {
      sv.getAll().valueChanges().subscribe(e=>{
        this.list = e;
      })
    }
    // si está logeado como paciente solo muestro el hsitorial clinico de tal paciente.
    // si está logeado como especialista solo muestro el historial clinicó que atendió el especialista.
  }

  ngOnInit(): void {
  }

}
