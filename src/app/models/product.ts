export class Product {
  Id:number;
  Name: string;
  description:string;
  Price:number;
  Imageurl:string;

  constructor(Id:number,Name="",description="",Price=0,Imageurl=""){
    this.Id=Id;
    this.Name=Name;
    this.description=description;
    this.Price=Price;
    this.Imageurl=Imageurl;
  }

}
