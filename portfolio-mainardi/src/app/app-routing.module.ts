import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicAcercaDeComponent } from './components/acde/edic-acerca-de.component';
import { EditeducacionComponent } from './components/educ/edit-educacion.component';
import { NeweducacionComponent } from './components/educ/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencialab/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencialab/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EsitSkillComponent } from './components/hys/esit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewproyectosComponent } from './components/proyectos/new-proyectos.component';
import { NewProyectos2Component } from './components/proyectos/new-proyectos2.component';
//import { EsitSkillComponent } from './components/hys/esit-skill.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'newproyectos', component: NewProyectos2Component},
  { path: 'editproyectos/:id', component: EditproyectosComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EsitSkillComponent},
  { path: 'editacercade/:id', component: EdicAcercaDeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
