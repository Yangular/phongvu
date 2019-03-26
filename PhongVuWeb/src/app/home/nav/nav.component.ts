import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/models/category.class';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

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

}
