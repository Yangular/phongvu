import { Component, OnInit, OnDestroy } from '@angular/core';
import { products } from '../../../models/products.class';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../../Service/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit, OnDestroy{

  public _subscription: Subscription;
  public _subscriptionParams: Subscription;
  public _products : products = {};

  constructor(
    public router :Router,
    public productservice : ProductsService,
    private activeRouterService: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._subscriptionParams = this.activeRouterService.params.subscribe((data : Params) =>{
      this._subscription = this.productservice.getProductDetail(data['id']).subscribe((products: products) =>{
        this._products = products;
      })
    })
  }

  onUpdate() {
    this._subscription = this.productservice.UpdateProductsID(this._products).subscribe((data:products) => {
      this.router.navigateByUrl('/admin');
    });
  }

  ngOnDestroy() {
    if (this._subscription){
      this._subscription.unsubscribe();
    }
    if (this._subscriptionParams){
      this._subscriptionParams.unsubscribe();
    }
  }
}
