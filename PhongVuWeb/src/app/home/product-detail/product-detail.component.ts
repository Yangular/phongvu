import { Component, OnInit } from '@angular/core';
import { products } from '../../models/products.class';
import { ProductsService } from '../../Service/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public _products : products = {};
  
  constructor(
    public router :Router,
    public productservice : ProductsService,
    private activeRouterService: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRouterService.params.subscribe((data : Params) =>{
      this.productservice.getProductDetail(data['id']).subscribe((products: products) =>{
        this._products = products;
      })
    })
  }

}
