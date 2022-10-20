import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acde',
  templateUrl: './acde.component.html',
  styleUrls: ['./acde.component.css']
})
export class AcdeComponent implements OnInit {
persona: persona = null;
  
constructor(public personaService: PersonaService, private tokenService: TokenService) { }
isLogged = false;
  ngOnInit(): void {
   this.cargarPersona();
   if(this.tokenService.getToken()){
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data => 
      {this.persona = data})
  }

}
