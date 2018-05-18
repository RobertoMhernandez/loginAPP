import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent } from './componentes/home-page/home-page.component';
import {LoginPageComponent} from './componentes/login-page/login-page.component';
import {RegisterPageComponent} from './componentes/register-page/register-page.component';
import { PrivadoPageComponent } from'./componentes/privado-page/privado-page.component';
import { NoFoundPageComponent } from './componentes/no-found-page/no-found-page.component';
import { PersonaComponent } from "./componentes/personas/persona/persona.component";
import { PersonasListComponent } from "./componentes/personas/personas-list/personas-list.component";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
{path:'',component: HomePageComponent},
{path:'login',component:LoginPageComponent},
{path:'register',component:RegisterPageComponent},
{path:'privado',component:PrivadoPageComponent, canActivate:[AuthGuard]},
{path:'persona',component:PersonaComponent,canActivate:[AuthGuard]},
{path:'personalist',component:PersonasListComponent,canActivate:[AuthGuard]},
{path:'**',component:NoFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }