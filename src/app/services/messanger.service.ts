import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessangerService {

  subject:any=new Subject()
  constructor() { }

  sendmsg(product:any){
    this.subject.next(product)
  }

  getmsg(){
    return this.subject.asObservable()
  }
}
