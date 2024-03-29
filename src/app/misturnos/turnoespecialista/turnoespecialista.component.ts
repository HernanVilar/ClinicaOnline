import { Component, OnInit } from '@angular/core';
import { Historiaclinica } from 'src/app/clases/historiaclinica';
import { AgregarestadoturnoService } from 'src/app/services/agregarestadoturno.service';
import { AuthService } from 'src/app/services/auth.service';
import { HistoriaClinicaService } from 'src/app/services/historia-clinica.service';
import { HorariosturnosService } from 'src/app/services/horariosturnos.service';
import { RegistrarUsuariosService } from 'src/app/services/registrar-usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-turnoespecialista',
  templateUrl: './turnoespecialista.component.html',
  styleUrls: ['./turnoespecialista.component.css']
})
export class TurnoespecialistaComponent implements OnInit {
  historiaclinicaa:any = [];
  b:any = '';
  list:any;
  resenia:boolean = false;
  reseniaActual:any;
  ditt:any = "hola";

  constructor(public auth:AuthService,private agregarestadoturno:AgregarestadoturnoService,private hsturnos:HorariosturnosService,private historiaclinica:HistoriaClinicaService,private registrarUsuario:RegistrarUsuariosService) 
  {
  
    
    this.agregarestadoturno.getAll().valueChanges().subscribe(e=>{
      this.list = e;
      
    })
    this.historiaclinica.getAll().valueChanges().subscribe(e=>{
      this.historiaclinicaa = e;
    })
   }

  ngOnInit(): void {
  }
  finalizado(data:any)
  {
    console.log(data);
    
    Swal.fire({
      title: 'Comentario Especialista',
      html: `<input type="text" id="comentario" class="swal2-input" placeholder="Comentario">
      <input type="text" id="diagnostico" class="swal2-input" placeholder="Diagnostico">`,
      confirmButtonText: 'Enviar',
      focusConfirm: false,
      preConfirm: () => {
        let comentario!:any;
        let diagnostico!:any;
        comentario = (<HTMLInputElement>Swal.getPopup()!.querySelector('#comentario')).value;
        diagnostico = (<HTMLInputElement>Swal.getPopup()!.querySelector('#diagnostico')).value;
        if (!comentario || !diagnostico) {
          Swal.showValidationMessage(`Cargue Comentario y diagnostico!`)
        }
        return { comentario: comentario, diagnostico: diagnostico }
      }
    }).then((result:any)=>{


      
      if(result.isConfirmed)
      {

        data.comentarioespecialista = result.value.comentario;
        data.diagnostico = result.value.diagnostico;
        data.estado = "finalizado";
        this.buscar(data);

        Swal.fire({
          title: 'Historia Clinica',
          html: `<input type="text" id="altura" class="swal2-input" placeholder="Altura (En metros)">
          <input type="text" id="peso" class="swal2-input" placeholder="Peso (En kilos)">,
          <input type="text" id="temperatura" class="swal2-input" placeholder="Temperatura (En ~Grado Celcius)">
          <input type="text" id="presion" class="swal2-input" placeholder="Presión">
          <input type="number" id="numero" class="swal2-input" placeholder="Tato tipo Number"><br>
          <span>Otros<span>
          <div class="row">
          <div class="col-6">
          <input type="text" id="clave1" class="swal2-input col-6" placeholder="Clave (opcional)">
          </div>
          <div class="col-6">
          <input type="text" id="valor1" class="swal2-input col-6" placeholder="Valor (opcional)">
          </div>
  
          <div class="col-6">
          <input type="text" id="clave2" class="swal2-input col-6" placeholder="Clave (opcional)">
          </div>
          <div class="col-6">
          <input type="text" id="valor2" class="swal2-input col-6" placeholder="Valor (opcional)">
          </div>
  
          <div class="col-6">
          <input type="text" id="clave3" class="swal2-input col-6" placeholder="Clave (opcional)">
          </div>
          <div class="col-6">
          <input type="text" id="valor3" class="swal2-input col-6" placeholder="Valor (opcional)">
          </div>
          </div>
          `,
          confirmButtonText: 'Enviar',
          focusConfirm: false,
          preConfirm: () => {
            let altura!:any;
            let peso!:any;
            let temperatura!:any;
            let presion!:any;
            let dni !: any;
  
            let clave1!:any;
            let valor1!:any;
            let clave2!:any;
            let valor2!:any;
            let clave3!:any;
            let valor3!:any;
            let numero!:any;
            let otros:any = [];
  
            altura = (<HTMLInputElement>Swal.getPopup()!.querySelector('#altura')).value;
            peso = (<HTMLInputElement>Swal.getPopup()!.querySelector('#peso')).value;
            temperatura = (<HTMLInputElement>Swal.getPopup()!.querySelector('#temperatura')).value;
            presion = (<HTMLInputElement>Swal.getPopup()!.querySelector('#presion')).value;
  
            clave1 = (<HTMLInputElement>Swal.getPopup()!.querySelector('#clave1')).value;
            valor1 = (<HTMLInputElement>Swal.getPopup()!.querySelector('#valor1')).value;
            clave2 = (<HTMLInputElement>Swal.getPopup()!.querySelector('#clave2')).value;
            valor2 = (<HTMLInputElement>Swal.getPopup()!.querySelector('#valor2')).value;
            clave3 = (<HTMLInputElement>Swal.getPopup()!.querySelector('#clave3')).value;
            valor3 = (<HTMLInputElement>Swal.getPopup()!.querySelector('#valor3')).value;
            numero = (<HTMLInputElement>Swal.getPopup()!.querySelector('#numero')).value;
            if (!altura || !peso || !temperatura || !presion) {
              Swal.showValidationMessage(`Cargue historia clinica! (Los parametros obligatorios)`)
            }
            console.log(numero);
            
            if(numero <0 || numero >100)
            {
              Swal.showValidationMessage(`Datos incorrectos! (El parametro numerico es de 0-100)`)
            }
            // if(valor1 == undefined)
            // {
            //   valor1 = "";
            // }
            // if(valor2 == undefined)
            // {
            //   valor2 = ""
            // }
            // if(valor3 == undefined)
            // {
            //   valor3 = "";
            // }
            // if(clave1 == undefined)
            // {
            //   clave1 == "";
            // }
            // if(clave2 == undefined)
            // {
            //   clave2 == "";
            // }
            // if(clave3 == undefined)
            // {
            //   clave3 == "";
            // }
            if(clave1 && valor1)
            {
              otros.push({clave:clave1, valor:valor1});
            }
            if(clave2 && valor2)
            {
              otros.push({clave:clave2, valor:valor2});
            }
            if(clave3 && valor3)
            {
              otros.push({clave:clave3, valor:valor3});
            }
            return { altura: altura, peso: peso, temperatura:temperatura, presion:presion, otros:otros }
          }
        }).then((result:any)=>{
          console.log(result);
          
          if(result.isConfirmed)
          {
            // if(result.value.otros.length>0)
            // {
            //   for(let i = 0; i<result.value.otros.length;i++)
            //   {
            //     result.value.otros[i]
            //   }
            // }
            console.log(result.value.valor1);
            
            if(result.value.clave1 == undefined)
            {
              result.value.clave1 = "";
            }
            if(result.value.clave2 == undefined)
            {
              result.value.clave2 = "";
            }
            if(result.value.clave3 == undefined)
            {
              result.value.clave3 = "";
            }
  

            this.registrarUsuario.getAll().get().subscribe(e=>{e.forEach(e=>{
              if(e.data().email == data.correoPaciente)
              {
            let historiaClinica = new Historiaclinica();
            historiaClinica.altura = result.value.altura;
            historiaClinica.peso = result.value.peso;
            historiaClinica.temepratura = result.value.temperatura;
            historiaClinica.presion = result.value.presion;
            historiaClinica.dia = data.dia;
            historiaClinica.hora = data.hora
            historiaClinica.minutos = data.minutos;
            historiaClinica.correoespecialista = data.correoEspecialista;
            historiaClinica.correopaciente = data.correoPaciente;
            historiaClinica.especialidad = data.especialidad;
            historiaClinica.otros = result.value.otros;
            historiaClinica.dni = e.data().dni;
            console.log(historiaClinica.otros);
            
            this.historiaclinica.create(historiaClinica).then((e:any)=>{
              alert("HISTORIA CLINICA CARGADA")
            })
              }
          })
        })

      
          }
        })
      }
    })
  }
  ejecutarAccion(accion:any,data:any)
  {
    if(accion == 'aceptar')
    {
      data.estado = 'aceptado';
      this.buscar(data);
    }
  }
  
  cancelarTurno(quiencancelo:any,data:any)
  {  
    Swal.fire({
      title: '¿Escribe el comentario?',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        if(quiencancelo == 'especialista')
        {
          data.comentarioespecialista = result.value
        }
        else if(quiencancelo == 'paciente')
        {
          data.comentariopaciente = result.value;
        }
        else
        {
          data.comentarioadmin = result.value;
        }
        data.estado = "cancelado";
        this.buscar(data);
        this.quehago(data.dia,data.hora,data.minutos,data.correoEspecialista);
      }
    })
  }
  buscar(data:any)
  {
   this.agregarestadoturno.getAll().get().subscribe(e=>{e.forEach(e=>{
      if(e.data().especialidad == data.especialidad && e.data().correoEspecialista == data.correoEspecialista && e.data().dia == data.dia && e.data().hora == data.hora && e.data().minutos == data.minutos)
      {
        this.agregarestadoturno.update(e.id,data)
      }
   })})
  }
  verresenia(data:any)
  {
    this.reseniaActual = data;
    this.resenia  = !this.resenia;
  }

  quehago(dia:any,hora:any,minutos:any,email:any)
  {
    let arraytercero:any = [];
   let tip =  this.hsturnos.getAll().valueChanges().subscribe(e=>{
    tip.unsubscribe();
      for(let i = 0; i<e.length;i++)
      {
          arraytercero.push(e[i]);
      }
      for(let i = 0; i<arraytercero.length;i++)
      {
        if(arraytercero[i].email == email)
        {
      for(let z = 0; z<arraytercero[i].fechas.length;z++)
      {
        if(arraytercero[i].fechas[z].dia == dia)
        {
          for(let j = 0; j<arraytercero[i].fechas[z].horario.length;j++)
          {  
            
            if(arraytercero[i].fechas[z].horario[j].hora == hora && arraytercero[i].fechas[z].horario[j].minutos == minutos)
            {
              arraytercero[i].fechas[z].horario[j].estado= 'habilitado';
              this.hsturnos.getAll().query.get().then(e=>{
                e.forEach((e:any)=>{
                   if(arraytercero[i].email == e.val().email && arraytercero[i].especialidad == e.val().especialidad)
                   {
                    this.hsturnos.update(e.key,arraytercero[i])
                   }
                 }
                 )
               })
               break;
            }
          }
        }
      }
    }
    }
    })  
    
  
  }
  hacerBusqueda()
  {
    let arrnueva = [];
    let cantidadletras = this.b.length;
    
    var especialista = this.list.filter((e:any)=>{

      return e.especialidad == this.b || e.correoEspecialista == this.b;

      
    })
    if(especialista.length > 0 )
    {
      this.list = especialista;
    }
  }
  limpiar()
  {
    this.list = [];
    this.agregarestadoturno.getAll().get().subscribe(e=>{e.forEach(e=>{
      this.list.push(e.data());
    })})
  }
}
