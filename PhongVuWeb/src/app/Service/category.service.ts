import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from "../../environments/environment";
import { category } from '../models/category.class';

const url = `${environment.apiPV}/api/v1/categories/list?is_active=1`;
const urldecate = `${environment.apiPV}/api/v1/categories/list?is_active=0`;
const urladdcategory = `${environment.apiPV}/api/v1/categories/create`;
const urldetailcategory = `${environment.apiPV}/api/v1/categories/details`;

@Injectable({
    providedIn: 'root'
  })
  
export class CategoryService {

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

  // Active Category
  getAllcategory(): Observable<category>{
    return this.http.get<category>(url);
  }
  // Deactive Category
  getAllDeactiveCategory(): Observable<category>{
    return this.http.get<category>(urldecate);
  }
  // ADD Category
  CreateAllcategory(_category: category) : Observable<category>{
    return this.http.post<category>(urladdcategory, _category, {headers: this.headers});
  }

  getCategoryDetail (id: string) : Observable <category> {
    return this.http.get<category>(`${urldetailcategory}/${id}`, {headers: this.headers});
  }

  getCategoryDeactive (_category: category) : Observable<category> {
    return this.http.put<category> (`${urldetailcategory}/${_category['_id']}`, _category, {headers: this.headers});
  }

}
