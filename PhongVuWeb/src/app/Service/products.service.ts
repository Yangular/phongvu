import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { products } from '../models/products.class';

const url = `${environment.apiPV}/api/v1/products/list`;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    public http: HttpClient,
  ) { }

  getAllproducts(product: products) : Observable<products>{
    return this.http.get<products>(url);
  }
}
