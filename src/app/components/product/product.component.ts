import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';
import { Products } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product:Products;

  constructor( private activatedRoute:ActivatedRoute,
               private _productService:ProductService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( param => {
      this._productService.getProduct( param.id ).subscribe( res => {
        this.product = res;
      } );
    });
  }

}
