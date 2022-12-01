import { Component, OnInit } from '@angular/core';
import {Products} from "../Model/products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProdcut : Products[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  constructor() { }

  ngOnInit(): void {
  }
  InscreaseLike(p:any){

    let index=this.listProdcut.indexOf(p)
    this.listProdcut[index].like++
  }
  decreaseQuantity(p:any){

    this.listProdcut[p].quantity--
  }
  search=0;

}
