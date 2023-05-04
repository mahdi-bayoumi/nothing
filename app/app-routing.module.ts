import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CostumerComponent } from './costumer/costumer.component';
import { CvComponent } from './cv/cv.component';
import { DatabaseComponent } from './database/database.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
  {path: "home",pathMatch:"full",redirectTo: "home"},
{path: "home",component:HomeComponent},
{path: "costumer",component:CostumerComponent},
{path: "login",component:LoginComponent},
{path: "register",component:RegisterComponent},
{path: "cv",component:CvComponent},
{path: "database",component:DatabaseComponent},
{path:"app",component:AppComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const Routingcomponent=[HomeComponent,CostumerComponent,LoginComponent,RegisterComponent,CvComponent,DatabaseComponent];
