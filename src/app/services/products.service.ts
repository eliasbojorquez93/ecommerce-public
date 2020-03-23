import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Products } from '../interfaces/products.interface';

@Injectable()

export class ProductService {
    constructor(
        private http: HttpClient,
    ) {}

    searchQueryParams(queryParams:object) {
        let queryString = '?';
        for (const key in queryParams) {
            switch(key) {
                case 'min': 
                    queryString = `${queryString}price_gte=${queryParams[key]}`
                    break;
                case 'max': 
                    queryString = `${queryString}price_lte=${queryParams[key]}`
                    break;
                default: break;
            }
            queryString = `${queryString}&`;
        }
        return queryString;
    }

    getProduct(id:string, queryParams:object = {}) {
        
        return this.http.get<Products>(
            `http://localhost:3004/products/${ id }`
        );
    }

    getProducts(limit?:string, queryParams:any = {}){
        let params = new HttpParams();
        if(queryParams)
            queryParams = this.searchQueryParams(queryParams);
        if(limit)
            params = new HttpParams().set('_limit', limit);
        
        return this.http.get<Products[]>(
            `http://localhost:3004/products${queryParams}`,
            { headers: {}, params: params }
        );
    }

    searchProducts(q:string, queryParams:object = {}){
        let params = new HttpParams();
        params = new HttpParams().set('q', q);

        return this.http.get<Products[]>(
            'http://localhost:3004/products',
            { headers: {}, params: params }
        );
    }

    getByCategory(id:string, queryParams:any = {}){
        let params = new HttpParams();
        if(queryParams)
            queryParams = this.searchQueryParams(queryParams);
        params = new HttpParams().set('categoriesId_like', id);

        return this.http.get<Products[]>(
            `http://localhost:3004/products${queryParams}`,
            { headers: {}, params: params }
        );
    }
}