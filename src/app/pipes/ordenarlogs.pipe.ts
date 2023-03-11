import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarlogs'
})
export class OrdenarlogsPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {

    console.log("segundo" + value);
    
    return value.filter(e=>{
      return e  
    }).sort(this.comparar);
  }
  comparar(data1:any,data2:any)
  {
    console.log(Date.parse(data1.dia));
    
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
