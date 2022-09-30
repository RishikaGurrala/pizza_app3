import { Product } from "./product";

export class CartItem {
  Id:number;
  ProductId:number;
  ProductName:string;
  Qty:number;
  Price:number;

  constructor(Id:number,product:Product,Qty=1){
    this.Id=Id;
    this.ProductId=product.Id;
    this.ProductName=product.Name;
    this.Price=product.Price;
    this.Qty=Qty;
  }
}


