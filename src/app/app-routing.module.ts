import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrudTableComponent } from './Components/crud-table/crud-table.component';
import { HistoriqueComponent } from './Components/historique/historique.component';
import { IndexComponent } from './Components/index/index.component';
import { LoginComponent } from './Components/login/login.component';
import { Page404Component } from './Components/page404/page404.component';
import { PdfComponent } from './Components/pdf/pdf.component';

const routes: Routes = [
  {path: '', redirectTo: 'adminlogin', pathMatch:'full'},
  {path: 'adminlogin', component: LoginComponent},
  {path: 'admin' , component: IndexComponent ,
  children: [
{
  path:'crud',
  component:CrudTableComponent
},
{
path:'commande',
component:PdfComponent
},
{
  path:'historique',
 component:HistoriqueComponent
},
{
  path:'**',
  component:Page404Component
}]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
