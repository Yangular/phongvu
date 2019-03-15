import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from "../../environments/environment";
import { products } from '../models/products.class';

const url = `${environment.apiPV}/api/v1/products/list`;
const urlcreate = `${environment.apiPV}/api/v1/products/create`;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private _router: Router,
  ) {
    this.headers = this.setHeaders();
  }

  setHeaders(): HttpHeaders {
    const header = new HttpHeaders();
    const token: string = localStorage.getItem('userToken');
    if (!token) {
      return header.set('Content-Type', 'application/json');
    }
    return header.set('Content-Type', 'application/json').set('Authorization', `Bearer ${token}`);
  }

  getAllproducts(product: products) : Observable<products>{
    return this.http.get<products>(url);
  }

  CreateAllproducts(product: products) : Observable<products[]>{
    return this.http.post<products[]>(urlcreate, product, {headers: this.headers});
  }
}
