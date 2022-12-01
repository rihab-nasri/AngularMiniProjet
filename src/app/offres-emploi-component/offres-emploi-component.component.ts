import { Component, OnInit } from '@angular/core';
import {Products} from "../Model/products";
import {Emploi} from "../Model/Emploi";

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  listeEmploi:Emploi[] =[
    {reference: "022t5", titre: "manager", entreprise: "heny", etat: true},
    {reference: "8555g5f", titre: "manager", entreprise: "zara", etat: false},
    {reference: "5999gh5", titre:"responsable", entreprise: "stradivarus", etat:false}, ]

    count=0;
  constructor() { }

  ngOnInit(): void {
    this.count=this.getCount(this.listeEmploi,'etat',false)
  }


  getCount(list:any[],criteria:string,value:any):number{
    let count=0;
    for(let i in list){
      if(list[i][criteria]===value){
        count++
      }
    }
    return count;
  }


}
