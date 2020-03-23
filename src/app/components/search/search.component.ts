import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';
import { Products } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchText: string;
  public products:Products[];
  public queryParams = {};

  constructor( private activatedRoute:ActivatedRoute,
               private _productService:ProductService ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.queryParams = queryParams;

      this.activatedRoute.params.subscribe( params => {
        if(params['text']){
          this._productService.searchProducts( params['text'], this.queryParams ).subscribe( res => {
            this.products = res;
            this.searchText = params['text'];
          })
        }else if( params['category'] ){
          this._productService.getByCategory( params['id'], this.queryParams ).subscribe( res => {
            this.products = res;
            this.searchText = params['category'];
          })
        }else{
          this._productService.getProducts( null, this.queryParams).subscribe( res => {
            this.products = res;
          })
        }
      });
    });
  }

}
