import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CargarhoraespecialistaService } from 'src/app/services/cargarhoraespecialista.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-perfilpaciente',
  templateUrl: './perfilpaciente.component.html',
  styleUrls: ['./perfilpaciente.component.css']
})
export class PerfilpacienteComponent implements OnInit {
  fecha = new Date().toLocaleDateString()
  @ViewChild('content',{static:false}) el!:ElementRef;
  historiaclinicaa:any = [];
  nuevo:any[] = [];
  b:any;
  datoUsuario:any = [];
  cargo:boolean = false;
  constructor(public auth:AuthService,private sv:RegistrarUsuariosService,private fb:FormBuilder,private es:CargarhoraespecialistaService,private h:HistoriaClinicaService) {
    this.sv.getAll().get().subscribe(e=>{e.forEach(ese=>{
      if(ese.data().email == this.auth.correologeado)
      {
        this.cargo = true;
        this.datoUsuario = ese.data();
      }

   })})
    if(this.auth.paciente)
    {
      let pec = this.h.getAll().valueChanges().subscribe(e=>{
       this.historiaclinicaa = [];
       for(let i = 0; i<e.length;i++)
       {
         if(e[i].correopaciente == auth.correologeado)
         {
           this.historiaclinicaa.push(e[i]);
         }
       }
      })
    }
   }
  ngOnInit(): void {
  }
  makePDF()
  {
    this.fecha = new Date().toLocaleDateString()
    let pdf = new jsPDF('p','pt','a4');

  
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
         pdf.save("Historia Clinica.pdf")
      }
    });
  }
  limpiar()
  {
    this.historiaclinicaa = [];
    this.h.getAll().get().subscribe(e=>{e.forEach(e=>{
      this.historiaclinicaa.push(e.data());
    })})
  }
  hacerBusqueda()
  {
    this.nuevo = [];
    for(let j=0;j<this.historiaclinicaa.length;j++)
      {
        let no = 0;
        let encontra2 = 0;
        for(let i = 0; i<this.historiaclinicaa[j].otros.length;i++)
        {
          Object.keys(this.historiaclinicaa[j].otros[i]).forEach((entry,index)=>{
           if(this.historiaclinicaa[j].otros[i][entry] == this.b)
           {
            console.log(encontra2);
            
            if(encontra2 == 0)
            {
              encontra2++;
              no = 1;
              this.nuevo.push(this.historiaclinicaa[j]);
              console.log(encontra2);
              
            }

           }
          })
        }
        if(no == 0)
        {
          if(this.historiaclinicaa[j].altura == this.b || this.historiaclinicaa[j].peso == this.b || this.historiaclinicaa[j].presion == this.b  || this.historiaclinicaa[j].temepratura == this.b)
          {
            this.nuevo.push(this.historiaclinicaa[j]);
          }
          
        }
  
      }
      if(this.nuevo.length != 0)
      {
        this.historiaclinicaa = this.nuevo
      }     
  }

}
