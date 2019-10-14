import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor() { }
  titre="Produit de 2 nombres";
  x:number;
  produit(a,b){
    this.x=a*b;
    return this.x;
  }

  ngOnInit() {
  }

}
