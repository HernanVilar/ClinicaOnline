import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'segundo'
})
export class SegundoPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
  
  
  //  value.map(e=>{
  //   let data  = new Date();
  //   data
  //  })

 return  value.map(e=>{
  console.log(e);

  e.dia = moment(e.dia).format('DD/MM/YYYY HH:mm:ss');
  return e;
 })
 

 
  
    // setTimeout(() => {
    //   let data  = new Date();
    //   data  = value[6].dia;
    //   console.log(data);
    //   console.log(data);
    //   console.log(data);
    //   console.log(moment(data).format('DD/MM/YYYY HH:mm'));
    // }, 1000);
      
      // console.log(moment(data).format('DD/MM/YYYY HH:mm'));

   
    
    // setTimeout(() => {
    //   console.log(data);
      
    //   console.log(    moment().day(data.dia).minute(data.minute).hour(data.hour))
    // }, 1000);


    // return value;

  }

}
