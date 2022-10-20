import { Component, OnInit } from '@angular/core';

import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageProyectosService } from 'src/app/servicios/image-proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];

  nombreE: string;
  descripcionE: string;
  img: string;

  constructor(private proyectosS: ProyectosService, private tokenService: TokenService , private router: Router,
    private activatedRouter: ActivatedRoute, public imageProyectosService: ImageProyectosService ) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.proyectosS.lista().subscribe(
      data =>{
        this.proyectos = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.proyectosS.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
  

  onCreate(): void{
    const proy = new Proyectos(this.nombreE, this.descripcionE, this.img);
    this.proyectosS.save(proy).subscribe(
      data =>{
        alert("Proyecto añadida correctamente");
       // this.router.navigate(['']);
       this.cargarProyecto();
      }, err =>{
        alert("falló");
        //this.router.navigate(['']);
        this.cargarProyecto();
      }
    )
  }
  
}
