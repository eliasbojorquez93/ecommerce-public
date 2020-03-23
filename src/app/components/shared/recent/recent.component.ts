import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  public limitTo = "6";
  public products:any;

  constructor( private _productService:ProductService ) { }

  ngOnInit() {
    this._productService.getProducts(this.limitTo).subscribe((res)=>{
      this.products = res
    });
  }

}
