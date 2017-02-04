import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DatepickerModule } from 'angular2-material-datepicker'
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SolicitudListadoComponent } from './components/solicitud-listado/solicitud-listado.component';
import { ClienteMantenimientoComponent } from './components/cliente-mantenimiento/cliente-mantenimiento.component';
import { ClienteListadoComponent } from './components/cliente-listado/cliente-listado.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
 

const appRoutes: Routes = [
  { path: 'clientes', component: ClienteListadoComponent },
 /* { path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  },*/
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SolicitudListadoComponent,
    ClienteMantenimientoComponent,
    ClienteListadoComponent,
    PageNotFoundComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
