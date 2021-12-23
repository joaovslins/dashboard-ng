import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/service/BaseResourceService.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends BaseResourceService<any>{

  constructor(protected injector: Injector) {
    super(injector, 'produto')
   }
}
