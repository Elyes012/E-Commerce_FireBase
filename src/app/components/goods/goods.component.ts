import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Good } from 'src/app/interfaces/goods.interface';
import { NgForm } from '@angular/forms';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  
  @ViewChild('image', {static: true}) imageFile: ElementRef

  constructor(private gs: GoodsService) { }

  ngOnInit() {
  }
  addNewGood(form: NgForm){
    let name = (<Good>form.value).name,
        price =(<Good>form.value).price,
        image = (<HTMLInputElement>this.imageFile.nativeElement).files[0]
  this.gs.addNewGoods(name, price, image).then(msg =>console.log(msg))
 
    //console.log((this.imageFile.nativeElement as HTMLInputElement).files[0])
  }
}
