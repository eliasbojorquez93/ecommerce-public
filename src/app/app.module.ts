import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// Routes
import { app_routing } from './app.routes';

// Services
import { ProductService } from './services/products.service';
import { CategoryService } from './services/categories.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PopularComponent } from './components/shared/popular/popular.component';
import { CardComponent } from './components/shared/card/card.component';
import { ProductsComponent } from './components/products/products.component';
import { FilterComponent } from './components/shared/filter/filter.component';
import { SearchComponent } from './components/search/search.component';
import { OverlayComponent } from './components/shared/overlay/overlay.component';
import { SearcherComponent } from './components/shared/navbar/searcher/searcher.component';
import { RecentComponent } from './components/shared/recent/recent.component';
import { ProductComponent } from './components/product/product.component';
import { SelectComponent } from './components/shared/select/select.component';
import { ButtonAddComponent } from './components/shared/button-add/button-add.component';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PopularComponent,
    CardComponent,
    ProductsComponent,
    FilterComponent,
    SearchComponent,
    OverlayComponent,
    SearcherComponent,
    RecentComponent,
    ProductComponent,
    SelectComponent,
    ButtonAddComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    app_routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ProductService,
    CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
