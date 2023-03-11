import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';

@Component({
  selector: 'app-soloadmin',
  templateUrl: './soloadmin.component.html',
  styleUrls: ['./soloadmin.component.css']
})
export class SoloadminComponent implements OnInit {
  list:any = null;
  public listnumber:any[];
  @Output() paciente: EventEmitter<any> = new EventEmitter<any>();
   @ViewChild('e') title: ElementRef;
   pacienteencontrado:any;
   texto:any = ""
   memoria:any = [];
  constructor(public auth:AuthService,public registrar:RegistrarUsuariosService) 
  {

    // setTimeout(() => {
    //   this.change();
    // }, 200);
      this.registrar.getAll().get().subscribe(e=>{this.list = []; e.forEach(e=>{
        
        if(e.data().perfil == 'paciente')
        {
          this.list.push(e.data());
          this.memoria.push(e.data());
        }
        // this.list.push(e.data());
    })
    console.log(this.list);
    
    })

   
  }
  buscar(data:any)
  {
    for(let i = 0; i<this.list.length;i++)
    {
      if(this.list[i].dni == data)
      {
        this.pacienteencontrado = this.list[i];
        break;
      }
    }
  }
  change()
  {
    const asTitle = this.title.nativeElement;
     asTitle.scrollIntoView();

    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.listnumber = [];
      for(let i = 0; i<this.list.length;i++)
      {
        this.listnumber.push(this.list[i]);
      }
      console.log(this.listnumber);
    },1000);
    
  }
  limpiar()
  {
    // this.list = [];
    // this.registrar.getAll().get().subscribe(e=>{e.forEach(e=>{
    //   if(e.data().perfil == 'paciente')
    //   {
    //     this.list.push(e.data());
    //     this.texto = "";
    //     console.log(this.list);
        
    //   }
    // })})
  }

  
  pacienteseleccionado(paciente:any)
  {
    this.paciente.emit(paciente);
    
  }
  buscadordni()
  {
    // for(let i = 0; i<this.memoria.length;i++)
    // {
    //   if(this.memoria[i].dni == this.texto)
    //   {
    //     this.list = [];
    //     this.list.push(this.memoria[i]);
    //     break;
    //   }
    // }
  }





}
