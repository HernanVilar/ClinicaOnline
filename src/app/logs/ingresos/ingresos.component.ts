
import { Component, OnInit, ViewChild } from '@angular/core';
import { LogIngresosService } from 'src/app/services/log-ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  list:any = [];
  tipito:any;
  ordenado:any ;

  constructor(private logs:LogIngresosService) 
  {
       logs.getAll().valueChanges().subscribe((e:any)=>{   
          this.list = e;
       }) 
  }
 

  ngOnInit(): void {
  }


}
