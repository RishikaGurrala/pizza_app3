import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productsUrl } from '../config/api';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products: Product[]=[
  //  new Product(1, 'product 1', 'this is 1st product', 150),
  //  new Product(2, 'product 2', 'this is 2st product', 250),
  //  new Product(3, 'product 3', 'this is 3st product', 100),
  //  new Product(4, 'product 4', 'this is 4st product', 140,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwBoezWalVrjujiIG8npsNtmukgtN-Cen-g&usqp=CAU'),
  //  new Product(5, 'product 5', 'this is 5st product', 200),
  //  new Product(6, 'product 6', 'this is 6st product', 250),
  //  new Product(7, 'product 7', 'this is 7st product', 350),
 ]
  constructor(private http:HttpClient) { }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(productsUrl);
  }
}
