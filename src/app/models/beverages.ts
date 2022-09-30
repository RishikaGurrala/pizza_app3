export class Beverages {
  Id:number;
  Name:string;
  Description:string;
  Price:number;
  Imageurl:string;

  constructor(Id:number,Name:string,Descrption="",Price:number,Imageurl=""){
    this.Id=Id;
    this.Name=Name;
    this.Description=Descrption;
    this.Price=Price;
    this.Imageurl=Imageurl;
  }
}
