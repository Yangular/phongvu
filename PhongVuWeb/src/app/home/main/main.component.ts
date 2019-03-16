import { Component, OnInit, OnDestroy } from '@angular/core';
import { products } from '../../models/products.class';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../Service/products.service';

declare var $;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  public _subscription: Subscription;
  public _products : products = [];

  constructor(
    public productservice : ProductsService,
  ) { }
  
  async ngOnInit() {
    setTimeout(()=>{
      this.showProduct()
    },0)
    setTimeout(()=>{
      this.showSlider()
    },1500)
  }

  showProduct(){
    this._subscription = this.productservice.getAllproducts().subscribe(data=> {
      this._products = data['docs'];
    });
  }

  showSlider(){
    $('.responsive').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
    });

    $('.responsive2').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
    });
  }

  ngOnDestroy() {
    if(this._subscription){
      this._subscription.unsubscribe();
    }
  }
}
