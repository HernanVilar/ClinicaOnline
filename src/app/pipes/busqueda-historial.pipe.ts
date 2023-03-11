import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaHistorial'
})
export class BusquedaHistorialPipe implements PipeTransform {

  transform(value: any, args: any): any {
    
    let result:any = [];

    if(args == '')
    {
     
      return value
    }

    
   
    for(let i = 0; i<value.length;i++)
    {
      if(value[i].dni.toString().includes(args))
      {
        result.push(value[i])
      }
    }
    return result;
  }

}
