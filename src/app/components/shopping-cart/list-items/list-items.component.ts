import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  productlist:Product[]=[]

  constructor(private productservice:ProductService) { }

  ngOnInit() {
    this.productservice.getProducts().subscribe((products)=>{
      this.productlist=products;
    })
  }

}
