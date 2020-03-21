import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; // importation storage
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs: AngularFirestore, private storage: AngularFireStorage) { }

  // valueChanges pour reçevoir les donnees
  //snapshotChanges pour reçevoir les donnees meme les id
  getAllGoods() {
    return this.fs.collection('goods').snapshotChanges()
  }
// upload image
  addNewGoods(name : string, price: Number, image : File) {
    // on utlise Promise pour voir que le fichier et les autres champs son bien ajouter
    return new Promise((resolve, reject) => {
      let ref =this.storage.ref('goods/'+ image.name);
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(photoUrl => {
          this.fs.collection('goods').add({
            name,
            price,
            photoUrl
          }).then(() =>resolve('Complete'))
        })
      })
    })
  }
}
