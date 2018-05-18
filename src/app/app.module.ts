import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//componentes
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NoFoundPageComponent } from './componentes/no-found-page/no-found-page.component';
import { PersonasComponent } from './componentes/personas/personas.component';
import { PersonasListComponent } from './componentes/personas/personas-list/personas-list.component';
import { PersonaComponent } from './componentes/personas/persona/persona.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PersonaService } from './servicios/persona.service';
import { AuthService } from './servicios/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import{AngularFireModule} from 'angularfire2';
import{AngularFireAuthModule } from 'angularfire2/auth';
import{environment} from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NoFoundPageComponent,PersonasComponent,
    PersonasListComponent,
    PersonaComponent
  ],
  imports: [BrowserAnimationsModule,
    MaterialModule,BrowserModule,
    AppRoutingModule,FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService,PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
