import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Shopping } from 'src/app/interfaces/shopping.interfac';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : Shopping[]=[]

  constructor(private cs: CartService) { }

  ngOnInit() {
    this.cs.getCart().subscribe(cart => {
      this.cart = cart.map(shooping => {
        return {
          id: shooping.payload.doc.id,
          ...shooping.payload.doc.data() as Shopping
        }
      })
      console.log(this.cart)
    })
  }

    delete(index) {
      this.cs.delete(this.cart[index].id)
    }

    save(index) {
      this.cs.save(this.cart[index].id, this.cart[index].amount)
    }
}
