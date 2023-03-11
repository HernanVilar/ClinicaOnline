import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'tercero'
})
export class TerceroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
   let formateado; 
   formateado =  value.map(e=>{
    
    
    let data = e.dia;
       let di = data.split('/');
       let formateado:any  = di[1]+'/'+di[0]+'/'+di[2];
       
       let terminado = new Date(formateado);
       let det = {'dia':terminado,'cantidad':e.cantidad}
       
       return det;

   })
   let aux2 =  formateado.sort(this.comparar);

   return  aux2.map(e=>{
    console.log(e);
  
    e.dia = moment(e.dia).format('DD/MM/YYYY');
    return e;
   })

   
   return aux2

   
  }

  comparar(data1:any,data2:any)
  {
    if(Date.parse(data1.dia) > Date.parse(data2.dia) )
    {
      return 1;
    }
    else if(Date.parse(data1.dia) < Date.parse(data2.dia)) 
    {
      return -1;
    }
    else
    {
      return 0;
    }
  }

}
