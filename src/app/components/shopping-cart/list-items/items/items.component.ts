import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessangerService } from 'src/app/services/messanger.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

 @Input()
  productitem!: Product;
  constructor(private msg:MessangerService,private cartService:CartService) { }

  ngOnInit(): void {
  }

  handleAddtocart(){
    // this.cartService.addProductToCart(this.productitem).subscribe(()=>{

    // })
    this.msg.sendmsg(this.productitem)
  }

}
