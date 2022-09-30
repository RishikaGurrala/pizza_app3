import { Component, Input, OnInit } from '@angular/core';
import { Beverages } from 'src/app/models/beverages';
import { MessangerService } from 'src/app/services/messanger.service';
@Component({
  selector: 'app-bev-items',
  templateUrl: './bev-items.component.html',
  styleUrls: ['./bev-items.component.css']
})
export class BevItemsComponent implements OnInit {

  @Input() productitem!:Beverages
  constructor(private msg:MessangerService) { }

  ngOnInit(): void {
  }

  handleAddtocart(){
    this.msg.sendmsg(this.productitem)
  }

}
