import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListagemComponent } from './listagem/listagem.component';
import { BuscaComponent } from './busca/busca.component';
import{UserIdComponent} from './user-id/user-id.component';


const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full'},  
   { path: 'home', component: HomeComponent },
   { path: 'listagem', component: ListagemComponent },
   {path: 'user-id', component: UserIdComponent},
   { path:'busca', component: BuscaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }