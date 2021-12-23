import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { VendedorComponent } from './pages/vendedor/vendedor.component';

const routes: Routes = [
  {path: '', component: VendasComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'vendedor', component: VendedorComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
