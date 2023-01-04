import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FasesComponent } from './components/fases/fases.component';
import { IssuesComponent } from './components/issues/issues.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { CiCdComponent } from './components/ci-cd/ci-cd.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    FasesComponent,
    IssuesComponent,
    UsuariosComponent,
    RelatoriosComponent,
    CiCdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
