import { Component, OnInit } from '@angular/core';
import { products } from '../../../models/products.class';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../../Service/products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public _subscription: Subscription;
  public _products : products = {};

  constructor(
    public productservice : ProductsService,
  ) { }

  ngOnInit() {
    this._subscription = this.productservice.getAllproducts(this._products).subscribe(data=> {
      this._products = data;
    });
  }

  ngOnDestroy() {
    if(this._subscription){
      this._subscription.unsubscribe();
    }
  }

}
