import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppCommomsModuleModule } from './shared/commoms-module/AppCommomsModuleModule';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { VendedorComponent } from './pages/vendedor/vendedor.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './pages/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    VendedorComponent,
    VendasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppCommomsModuleModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
