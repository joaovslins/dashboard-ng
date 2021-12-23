import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceComponent } from 'src/app/shared/components/BaseResource.component';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent extends BaseResourceComponent<any> {

  
  colunas=[
    'id',
    'nome',
    'preco',
    'acoes'
  ]

  produtodata=[
    'nome',
    'data'
  ]

  constructor(protected injector: Injector, protected service: ProdutosService) {
    super(injector, service)
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      nome: [null, Validators.required],
      preco: [null, Validators.required]
    })
    super.ngOnInit()
  }

}
