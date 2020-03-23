import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { Products } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  @Input() limitTo:string = "3";
  public products:Products[];

  constructor( private productService:ProductService ) { }

  ngOnInit() {
    this.productService.getProducts(this.limitTo).subscribe( res => {
      this.products = res;
    });
  }

}
