import { Component, OnInit, OnDestroy } from '@angular/core';
import { Good } from 'src/app/interfaces/goods.interface';
import { GoodsService } from 'src/app/services/goods.service';
import { element } from 'protractor';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  goods: Good[] = []
  goodObservable : Subscription
  add : number = -1
  constructor(private gs: GoodsService) { }

  ngOnInit() {
    this.goodObservable = this.gs.getAllGoods().subscribe(data => {
    this.goods = data.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data() as Good //name : element.payload.doc.data()['name'] get name of goods
        }
      })
    })
  } 

  ngOnDestroy() {
    this.goodObservable.unsubscribe()

  }
  addToCart(index : number) {
   this.add = +index
  }
}
