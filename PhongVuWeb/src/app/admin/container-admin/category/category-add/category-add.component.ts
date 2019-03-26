import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../Service/category.service';
import { category } from '../../../../models/category.class';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  public _category : category = {};

  constructor(
    public _categoryService : CategoryService,  
    public router :Router,
  ) { }

  onCreate(){
    this._categoryService.CreateAllcategory(this._category).subscribe( data => {
      if(data && data['_id']){
        this.router.navigate(['/admin/category-list']);
      }
    })
  }

  onSubmit( formAddcategory ) {
    if (formAddcategory.valid) {
      this.onCreate();
    }
    else {
      Swal.fire ({
        title: 'Erro...',
        text: 'Not Empty',
      })
    }
  }
  ngOnInit() {
  }

}
