import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceComponent } from 'src/app/shared/components/BaseResource.component';
import { VendedorService } from './vendedor.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent extends BaseResourceComponent<any> {

  colunas=[
      'id',
      'nome',
      'acoes'
  ]


  constructor(protected injector: Injector, protected service: VendedorService) {
    super(injector, service)
   }



  ngOnInit(): void {
    this.form=this.fb.group({
      id:[null],
      nome:[null, Validators.required]
    })
    super.ngOnInit()
  }

}
