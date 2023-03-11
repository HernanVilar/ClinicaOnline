import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any, args: string): any {

    
    let result: any = [];
    console.log(args.length);
    
   
    if(args === '')
    {
      return value;
    }

   
    for(let i = 0; i<value.length;i++)
   {
    
    if(value[i].especialidad.toLowerCase().includes(args.toLowerCase()) == true || value[i].nombrepaciente.toLowerCase().includes(args.toLowerCase()) == true)
    {
      result.push(value[i])
      // result = [...result,value[i]]
    }
   }

   return result
  }

}
