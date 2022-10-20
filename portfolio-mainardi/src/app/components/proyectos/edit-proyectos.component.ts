import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Proyectos } from 'src/app/model/proyectos';
import { ImageProyectosService } from 'src/app/servicios/image-proyectos.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})


  export class EditproyectosComponent implements OnInit {
    proyectos: Proyectos = null;
    
    constructor(
      private proyectosS: ProyectosService,
      private activatedRouter : ActivatedRoute,
      private router: Router,
      public imageProyectosService: ImageProyectosService
    ) { }
  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyectosS.detail(id).subscribe(
        data =>{
          this.proyectos = data;
        }, err =>{
           alert("Error al modificar");
           this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyectos.img = this.imageProyectosService.url
      this.proyectosS.update(id, this.proyectos).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la educacion");
          this.router.navigate(['']);
        }
      )
    }
    uploadImage($event: any){
      const id =  this.activatedRouter.snapshot.params['id'];
      const name = "fotoproyecto" + id;
      this.imageProyectosService.uploadImage($event, name);
      }
  }
