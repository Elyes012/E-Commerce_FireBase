import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; // importation storage

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs: AngularFirestore) { }

  // valueChanges pour reçevoir les donnees
  //snapshotChanges pour reçevoir les donnees meme les id
  getAllGoods() {
    return this.fs.collection('goods').snapshotChanges()
  }
}
