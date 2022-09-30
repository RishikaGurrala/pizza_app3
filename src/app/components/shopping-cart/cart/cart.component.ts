import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessangerService } from 'src/app/services/messanger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems:any[]=[

  ];

  constructor(private msg:MessangerService) { }
  cartTotal=0;

  ngOnInit() {

    this.msg.getmsg().subscribe((product:Product)=>{
      // this.cartitems.push({
      //   productname:product.name,
      //   qty:1,
      //   price:product.price
      // })
      this.addProductToCart(product)
    })
  }

  addProductToCart(product:Product){
    let productExists=false

    for(let i in this.cartitems){
      if(this.cartitems[i].productid== product.Id){
        this.cartitems[i].qty++
        productExists=true
        break;
      }
    }

    if(!productExists){
      this.cartitems.push({
        productid:product.Id,
        productName:product.Name,
        qty:1,
        price:product.Price
      })
    }

     this.cartTotal=0;
      this.cartitems.forEach(item=>{
        this.cartTotal+=(item.qty * item.price)
      })
  }




}
