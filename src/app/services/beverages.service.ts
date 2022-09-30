import { Injectable } from '@angular/core';
import { Beverages } from '../models/beverages';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { beveragesurl } from '../config/api';
@Injectable({
  providedIn: 'root'
})
export class BeveragesService {
beverages:Beverages[]=[]
  constructor(private http:HttpClient) { }

  getProducts():Observable<Beverages[]>{
    return this.http.get<Beverages[]>(beveragesurl);
  }
}
