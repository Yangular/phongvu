import { Component, OnInit } from '@angular/core';
import { category } from '../../../../models/category.class';
import { CategoryService } from '../../../../Service/category.service';

@Component({
  selector: 'app-category-deactive',
  templateUrl: './category-deactive.component.html',
  styleUrls: ['./category-deactive.component.css']
})
export class CategoryDeactiveComponent implements OnInit {

  public _category: category = [];

  constructor(
    public _CategoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory(){
    this._CategoryService.getAllDeactiveCategory().subscribe(data => {
      this._category = data;
    });
  }
}
