import { Component, OnInit } from '@angular/core';
import { products } from '../../../models/products.class';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../../Service/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public _subscription: Subscription;
  public _subscriptionParams: Subscription;
  public _products : products = {};

  constructor(
    public productservice : ProductsService,
    private activeRouterService: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._subscription = this.productservice.getAllproducts(this._products).subscribe(data=> {
      this._products = data;
    });
  }

  getID() {
    this._subscriptionParams = this.activeRouterService.params.subscribe((data : Params) =>{
      this._subscription = this.productservice.getProductDetail(data['id']).subscribe((products: products) =>{
        this._products = products;
      })
    })
  }
  ngOnDestroy() {
    if(this._subscription){
      this._subscription.unsubscribe();
    }
  }

}
