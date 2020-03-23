import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public categories:any;
  public overlay = false;
  public isOpen = false;

  constructor( private _categoriesService:CategoryService ) { }

  ngOnInit() {
    this._categoriesService.getCategories().subscribe( (res) => this.categories = res);
  }

  showOverlay() {
    this.overlay = !this.overlay;
  }

  toggleSideNav() {
    this.isOpen = !this.isOpen;
  }

}
