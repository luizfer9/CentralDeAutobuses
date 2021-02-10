import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CentralesComponent } from './centrales/centrales.component';
import { AutobusesComponent } from './autobuses/autobuses.component';
import { ChoferesComponent } from './choferes/choferes.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BlockUIModule } from 'ng-block-ui';
import { HttpClientModule  } from '@angular/common/http';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


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
        BrowserAnimationsModule,
        AppRoutingModule,
        DropdownModule,
        FormsModule,
        BlockUIModule,
        ModalModule.forRoot(),
        HttpClientModule,
        ToggleButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
