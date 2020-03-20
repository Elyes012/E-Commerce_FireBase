import { Injectable } from '@angular/core';
import { Good } from '../interfaces/goods.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore, private as: AuthService) { }

  addToCart(data : Good) {
    return this.fs.collection(`users/${this.as.userId}/cart`).add(data)
  }
}
