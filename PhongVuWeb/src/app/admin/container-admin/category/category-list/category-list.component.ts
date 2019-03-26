import { Component, OnInit } from '@angular/core';
import { category } from '../../../../models/category.class';
import { CategoryService } from '../../../../Service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public _category: category = [];
  public _Sub_Category: category = [];

  constructor(
    public _CategoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory(){
    this._CategoryService.getAllcategory().subscribe(data => {
      this._category = data;
    });
  }

  onDeactive(id: string) {
    this._CategoryService.getCategoryDetail(id).subscribe(data => {
      this._category = data;
      this._CategoryService.getCategoryDeactive(this._category).subscribe(data => {
        this.loadCategory();
      })
    })
  }
}
