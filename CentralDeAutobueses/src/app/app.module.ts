import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CentralesComponent } from './centrales/centrales.component';
import { AutobusesComponent } from './autobuses/autobuses.component';
import { ChoferesComponent } from './choferes/choferes.component';

@NgModule({
  declarations: [
    AppComponent,
    CentralesComponent,
    AutobusesComponent,
    ChoferesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
