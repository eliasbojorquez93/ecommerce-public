import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products:any[];

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  showProduct(id:number){
    this.router.navigate(['products', id]);
  }

}
