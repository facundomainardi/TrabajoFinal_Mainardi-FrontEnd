import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acde',
  templateUrl: './acde.component.html',
  styleUrls: ['./acde.component.css']
})
export class AcdeComponent implements OnInit {
persona: persona = new persona(" ", " ", " ");
  
constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>(this.persona = data))
  }

}
