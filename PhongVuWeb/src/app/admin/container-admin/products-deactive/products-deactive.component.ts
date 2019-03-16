import { Component, OnInit } from '@angular/core';
import { products } from '../../../models/products.class';
import { ProductsService } from '../../../Service/products.service';

@Component({
  selector: 'app-products-deactive',
  templateUrl: './products-deactive.component.html',
  styleUrls: ['./products-deactive.component.css']
})
export class ProductsDeactiveComponent implements OnInit {

  public _products: products = [];

  constructor(
    public productservice: ProductsService,
  ) { }

  ngOnInit() {
    this.loadShowDeactive();
  }
  loadShowDeactive() {
    this.productservice.getAllShowDeactive().subscribe(data => {
      this._products = data['docs'];
    });
  }

}
