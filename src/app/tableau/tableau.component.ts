import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  constructor() { }
  titre : string="Opérations sur un tableau"
  tabNb=[41,18,23,58]
  taille=this.titre.length;
  min(tabNb){
    let m=tabNb[1];
    
    for(let t in tabNb)
    if(tabNb[t]>tabNb[t+1])
    m=tabNb[t+1];
    return m;
  }
  moy(tabNb){

    let s=0;
    for(let t in this.tabNb)
    s+=tabNb[t];
  
    let moy =s/tabNb.length;
    return moy.toFixed(2);
    
  }
  

  ngOnInit() {
  }

}
