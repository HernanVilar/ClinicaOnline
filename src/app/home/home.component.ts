import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegistrarUsuariosService } from '../services/registrar-usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private us:RegistrarUsuariosService,public auth:AuthService,private router:Router) 
  {  
    console.log(auth.administrador);
    console.log(auth.especialista);
    console.log(auth.administrador);
    
    
  }

  ngOnInit(): void {
  }

}
