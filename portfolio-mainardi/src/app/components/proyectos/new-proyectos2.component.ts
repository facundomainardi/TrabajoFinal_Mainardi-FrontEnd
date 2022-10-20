import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-proyectos2',
  templateUrl: './new-proyectos2.component.html',
  styleUrls: ['./new-proyectos2.component.css']
})
export class NewProyectos2Component implements OnInit {

  nombreE: string;
  descripcionE: string;
  img: string;

  constructor(private ProyectoS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proy = new Proyectos(this.nombreE, this.descripcionE, this.img);
    this.ProyectoS.save(proy).subscribe(
      data =>{
        alert("Proyecto añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }
}
