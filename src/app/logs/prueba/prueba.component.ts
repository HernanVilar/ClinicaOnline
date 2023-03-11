import { Component, OnInit,ViewChild,ElementRef,  } from '@angular/core';
import { AgregarestadoturnoService } from 'src/app/services/agregarestadoturno.service';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  list:any = []
  fecha:any;
  ctx:any;
  turnospordiacontador:any = [];
  filtrado:any = [];
  @ViewChild('content',{static:false}) el!:ElementRef;
  aux:any = [];
  constructor(private agregarestadoturno:AgregarestadoturnoService) 
  {
     this.agregarestadoturno.getAll().valueChanges().subscribe(e=>{
        
         for(let i = 0; i<e.length;i++)
         {
          const elemento = e[i].dia;
          if(!this.filtrado.includes(e[i].dia))
          {
           this.filtrado.push(elemento);
          }
         }
         for(let i = 0; i <this.filtrado.length;i++)
        {
           let contador = 0;
           for(let j = 0; j<e.length;j++)
           {
             if(this.filtrado[i] == e[j].dia)
             {
               contador ++;
             }
           }
           this.turnospordiacontador.push(contador);
        }
 
        for(let i = 0; i<this.filtrado.length;i++)
        {
         // let dit = e[i].dia;
         //  let di = dit.split('/');
         //  let formateado:any  = di[1]+'/'+di[0]+'/'+di[2];
 
          
         //  let terminado = new Date(formateado);
        
          
      
          
          let data = {'dia':this.filtrado[i],'cantidad':this.turnospordiacontador[i]}
          this.aux.push(data);
        }

          
          this.list = this.aux;
  
   
       
        
         
         
         
         
      })

  }

  ngOnInit(): void {
  }

 

}
