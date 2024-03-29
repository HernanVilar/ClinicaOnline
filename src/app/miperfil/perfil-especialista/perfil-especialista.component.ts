import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Diahoraespecialista } from 'src/app/clases/diahoraespecialista';
import { AuthService } from 'src/app/services/auth.service';
import { CargarhoraespecialistaService } from 'src/app/services/cargarhoraespecialista.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';

@Component({
  selector: 'app-perfil-especialista',
  templateUrl: './perfil-especialista.component.html',
  styleUrls: ['./perfil-especialista.component.css']
})
export class PerfilEspecialistaComponent implements OnInit {
  unespecialista!:Diahoraespecialista;
  arrayhoraaa:any = [];
  lunes:any;
  martes:any;
  miercoles:any;
  jueves:any;
  viernes:any;
  sabado:any;
  domingo:any;
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

   }

  ngOnInit(): void {
  }
  enviar()
  {
    let esperar;
    let data = (<HTMLInputElement>document.getElementById("select")).value;
    this.unespecialista = new Diahoraespecialista();
    this.arrayhoraaa[0] = null;
    this.arrayhoraaa[1] = null;
    this.arrayhoraaa[2] = null;
    this.arrayhoraaa[3] = null;
    this.arrayhoraaa[4] = null;
    this.arrayhoraaa[5] = null;
    this.arrayhoraaa[6] = null;
    if(this.lunes)
    {
      this.arrayhoraaa[1] = 1;
    }
    if(this.martes)
    {
      this.arrayhoraaa[2] = 2;
    }
    if(this.miercoles)
    {
      this.arrayhoraaa[3] = 3;
    }
    if(this.jueves)
    {
      this.arrayhoraaa[4] = 4;
    }
    if(this.viernes)
    {
      this.arrayhoraaa[5] = 5;
    }
    if(this.sabado)
    {
      this.arrayhoraaa[6] = 6;
    }
    console.log(this.arrayhoraaa);
    this.unespecialista.dias = this.arrayhoraaa;
    this.unespecialista.email = this.datoUsuario.email;
    this.unespecialista.especialidad = (<HTMLInputElement>document.getElementById('select2')).value;
    this.unespecialista.imagen = this.datoUsuario.imagen;
    this.unespecialista.nombre = this.datoUsuario.nombre;
    this.unespecialista.apellido = this.datoUsuario.apellido;
  
    if(data == 'maniana')
    {
      this.unespecialista.hora = {'horamin':'8','horamax':'12'}
    }
    else if(data == 'tarde')
    {
      this.unespecialista.hora = {'horamin':'12','horamax':'19'}
    }
    else 
    {
      this.unespecialista.hora = {'horamin':'8','horamax':'19'}
    }
    this.recorrer(this.unespecialista).then((e:any)=>{
      if(e==null)
      {
        this.es.create(this.unespecialista).then((e:any)=>{
        console.log("Hora y dias cargado correctamente!!");
      
       })
      }
      else
      {
        console.log(this.unespecialista);
        this.es.update(e,this.unespecialista).then(e=>{
          alert("Modificado correctamente!!")
        })
      }
    })
    //asd
    //asda
    // let data = (<HTMLInputElement>document.getElementById('agregar')).value;
    
    
  }

  recorrer(data:any)
  {
    let encontrado:any = null;
    return new Promise((resolve,rejected)=>{
      var clientesSubscription = this.es.getAll().get().subscribe((q) =>{q.forEach((doc)=>{

     
          if(doc.data().email == data.email && doc.data().especialidad == data.especialidad)
              {
                encontrado = doc.id;
              }    
          })
          resolve(encontrado);
           })
    })
    
  }
  dias(data:any)
  {
    if(data == 'lunes')
    {
      this.lunes = !this.lunes;
      console.log(data);
    }
    else if(data == 'martes')
    {
      this.martes = !this.martes;
      console.log(data);
    }
    else if(data == 'miercoles')
    {
      this.miercoles = !this.miercoles;
      console.log(data);
    }
    else if(data == 'jueves')
    {
      this.jueves = !this.jueves;
      console.log(data);
    }
    else if (data == 'viernes')
    {
      this.viernes = !this.viernes;
      console.log(data);
    }
    else
    {
      this.sabado = !this.sabado;
      console.log(data);
    }   
    
  }
}
