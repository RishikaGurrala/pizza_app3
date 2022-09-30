import { Component, OnInit } from '@angular/core';
import { Beverages } from 'src/app/models/beverages';
import { BeveragesService } from 'src/app/services/beverages.service';
@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {

    productList:Beverages[]=[]
  constructor(private beveragesService:BeveragesService) { }

  ngOnInit(): void {
    this.beveragesService.getProducts().subscribe((beverages=>{
      this.productList=beverages;
    }))
  }

}
