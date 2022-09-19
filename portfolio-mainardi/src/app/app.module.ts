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

@NgModule({
  declarations: [
    AppComponent,
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
    EducacionComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
