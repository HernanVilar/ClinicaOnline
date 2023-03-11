import { Component, OnInit, Output,Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CargarhoraespecialistaService } from 'src/app/services/cargarhoraespecialista.service';

@Component({
  selector: 'app-elegir-especialidad',
  templateUrl: './elegir-especialidad.component.html',
  styleUrls: ['./elegir-especialidad.component.css']
})
export class ElegirEspecialidadComponent implements OnInit {
  list:any = [];
  encontrado:boolean = false;
  //@Input() list:any = [];
  @Input() cambiobajar:any;
  @ViewChild('ancla') aca: ElementRef;
  @Output() especialidad: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private cargarhora:CargarhoraespecialistaService) 
  {
    cargarhora.getAll().valueChanges().subscribe((e:any)=>{
      for(let i = 0; i<e.length;i++)
      {
       const elemento = e[i].especialidad;
       if(!this.list.includes(e[i].especialidad))
       {
        this.list.push(elemento);
       }
      }
     })
  }
  // ngOnChanges(data:any)
  // {
  //   setTimeout(() => {
  //     this.change();
  //   }, 10);
  // }
  ngOnInit(): void {
    console.log("sisi");
    
  }
  emitirEspecialidad(data:any)
  {
    this.especialidad.emit(data);
  }
  change()
  {
    const asTitle = this.aca.nativeElement;
    
     asTitle.scrollIntoView();

    
  }
  titi()
  {
    console.log("chichi");
    
  }
}
