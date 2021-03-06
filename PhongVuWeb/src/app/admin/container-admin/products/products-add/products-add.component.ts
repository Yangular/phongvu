import { Component, OnInit } from '@angular/core';
import { products } from '../../../../models/products.class';
import { ProductsService } from '../../../../Service/products.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  public _products : products = {};

  constructor(
    public router :Router,
    public productservice : ProductsService,
  ) { }

  onCreate(){
    this.productservice.CreateAllproducts(this._products).subscribe( data => {
      if(data && data['_id']){
        this.router.navigate(['/admin']);
      }
    })
  }

  onSubmit( formAdd ) {
    if (formAdd.valid) {
      this.onCreate();
    }
    else {
      Swal.fire ({
        title: 'Erro...',
        text: 'Not Empty',
      })
    }
  }
  ngOnInit() {
    
  }

  ngOnDestroy() {
  }

}
