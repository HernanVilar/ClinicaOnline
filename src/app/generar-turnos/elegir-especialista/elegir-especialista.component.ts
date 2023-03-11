import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-elegir-especialista',
  templateUrl: './elegir-especialista.component.html',
  styleUrls: ['./elegir-especialista.component.css']
})
export class ElegirEspecialistaComponent implements OnInit {
   @Input() usuarios:any = [];
   @Output() obj:  EventEmitter<any> = new EventEmitter<any>();
   @Input() especialidad:any = "";
   contador:any = 0;
   arr2:any = new Array();
   arr3:any = new Array();
   esadmin:boolean = false;
   espaciente:boolean = false;
  constructor(private auth:AuthService) 
  {
    if(auth.paciente == true)
    {
      this.espaciente = true;
    }
    if(auth.administrador == true)
    {
      this.esadmin = true;
    }
    setTimeout(() => {
      console.log(this.especialidad);
    }, 300);
    
        setTimeout(() => {
    
          
    for(let i = 0; i<this.usuarios.length;i++)
    {
      if(this.contador == 3)
      {
        this.arr3.push(this.arr2);
        this.contador = 0;
        this.arr2 = new Array();
        this.arr2.push(this.usuarios[i])
       
      }
      else
      {
        this.arr2.push(this.usuarios[i]);
      }
      this.contador++;

      
    }
   if(this.contador >0)
   {
    this.arr3.push(this.arr2)
    this.contador = 0;
   }

   
  }, 100);
  }

  ngOnInit(): void {
    
  }

  accion(data:any)
  {  
    this.obj.emit(data);
  }
}
