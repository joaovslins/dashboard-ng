import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BaseResourceComponent } from 'src/app/shared/components/BaseResource.component';
import { VendedorComponent } from '../vendedor/vendedor.component';
import { VendedorService } from '../vendedor/vendedor.service';
import { VendasService } from './vendas.service';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent extends BaseResourceComponent<any> {


  colunas=[
    'id',
    'valortotal',
    'vendedor',
    'data',
    'acoes'
  ]

  constructor(protected injector: Injector, protected service: VendasService, private vendedor: VendedorService) {
    super(injector, service)
   }

   itemSource: any

   
  

  ngOnInit(): void {
    this.form = this.fb.group({
      id:[null],
      valortotal:[null, Validators.required],
      vendedor:[null]
    })
    this.listaVendedor()
    super.ngOnInit()
      
  
  }



  public listaVendedor(){
    this.vendedor.get().subscribe(

      item => {
        this.itemSource = item;
        console.log(item);
      },
      error => {
        this.failActions(error);
      }
    )
    
    
  }

}
