import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { RedessocialesComponent } from './components/redessociales/redessociales.component';
import { BnComponent } from './components/bn/bn.component';
import { AcdeComponent } from './components/acde/acde.component';
import { ExperiencialabComponent } from './components/experiencialab/experiencialab.component';
import { EducComponent } from './components/educ/educ.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { InterceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './components/experiencialab/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencialab/edit-experiencia.component';
import { EditeducacionComponent } from './components/educ/edit-educacion.component';
import { NeweducacionComponent } from './components/educ/new-educacion.component';
import { EducacionComponent } from './servicios/educacion/educacion.component';
import { EsitSkillComponent } from './components/hys/esit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { NewproyectosComponent } from './components/proyectos/new-proyectos.component';
import { EditproyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectos2Component } from './components/proyectos/new-proyectos2.component';
import { EdicAcercaDeComponent } from './components/acde/edic-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
//import { ArchivoComponent } from './components/archivo/archivo.component';

@NgModule({
  declarations: [
    AppComponent,
    NewproyectosComponent,
    HeaderComponent,
    LogoComponent,
    RedessocialesComponent,
    BnComponent,
    AcdeComponent,
    ExperiencialabComponent,
    EducComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditeducacionComponent,
    NeweducacionComponent,
    EducacionComponent,
    EsitSkillComponent,
    NewSkillComponent,
   
    EditproyectosComponent,
        NewProyectos2Component,
        EdicAcercaDeComponent,
       // ArchivoComponent
  ],
  imports: [
    DragDropModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
