import { Component, OnInit } from '@angular/core';
import { products } from '../../../models/products.class';
import { ProductsService } from '../../../Service/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public _products: products = [];
  public _productsDetail: products = [];

  constructor(
    public productservice: ProductsService,
  ) { }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct(){
    this.productservice.getAllproducts().subscribe(data => {
      this._products = data;
    });
  }

  onDeactive(id: string) {
    this.productservice.getProductDetail(id).subscribe(data => {
      this._products = data;
      this.productservice.getProductDeactive(this._products).subscribe(data => {
        this.loadProduct();
      })
    })
  }
}
