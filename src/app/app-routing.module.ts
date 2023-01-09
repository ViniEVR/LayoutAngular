import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiCdComponent } from './components/ci-cd/ci-cd.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FasesComponent } from './components/fases/fases.component';
import { IssuesComponent } from './components/issues/issues.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}, 
  {path: 'dashboard', component: DashboardComponent},
  {path: 'fases', component: FasesComponent},
  {path: 'issues', component: IssuesComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'relatorios', component: RelatoriosComponent},
  {path: 'cicd', component: CiCdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
