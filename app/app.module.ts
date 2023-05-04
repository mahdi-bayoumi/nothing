import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { DatabaseService } from './database.service';
import { AppRoutingModule, Routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CostumerComponent } from './costumer/costumer.component';
import { CvComponent } from './cv/cv.component';
import { DatabaseComponent } from './database/database.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { IdService } from './id.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DirectiveDirective } from './directive.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CostumerComponent,
    CvComponent,
    DatabaseComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    DirectiveDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
    
    
  ],
  providers: [DatabaseService,IdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
