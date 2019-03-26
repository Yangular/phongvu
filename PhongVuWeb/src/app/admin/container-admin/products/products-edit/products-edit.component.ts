import { Component, OnInit, OnDestroy } from '@angular/core';
import { products } from '../../../../models/products.class';
import { ProductsService } from '../../../../Service/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit, OnDestroy{

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

  onUpdate() {
    this.productservice.UpdateProductsID(this._products).subscribe((data:products) => {
      this.router.navigateByUrl('/admin');
    });
  }

  ngOnDestroy() {
   
  }
}
