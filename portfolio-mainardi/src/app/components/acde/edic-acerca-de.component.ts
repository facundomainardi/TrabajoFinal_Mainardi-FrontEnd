import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edic-acerca-de',
  templateUrl: './edic-acerca-de.component.html',
  styleUrls: ['./edic-acerca-de.component.css']
})
export class EdicAcercaDeComponent implements OnInit {
persona: persona = null;
  constructor(private activatedRouter: ActivatedRoute, 
    private personaService: PersonaService,
     private router: Router,
     public imageService: ImageService ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }
onUpdate(): void{
 
  const id = this.activatedRouter.snapshot.params['id'];
  this.persona.img = this.imageService.url
  this.personaService.update(id, this.persona).subscribe(
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
const name = "fotoperfil" + id;
this.imageService.uploadImage($event, name);

}
}
