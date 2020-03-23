import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ProductComponent } from './components/product/product.component';




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: SearchComponent },
    { path: 'products/:id', component: ProductComponent },
    { path: 'products/:category/:id', component: SearchComponent },
    { path: 'search/:text', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES, { scrollPositionRestoration: 'enabled' });