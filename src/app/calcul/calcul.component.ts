import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {

  constructor() { }
  s:number;
  contenu:number;
  titre="Opérations de calcul";
  carre(event:any){
    this.contenu=(event.target.value)*(event.target.value);
  }
  somme(a:number,b:number){
    return this.s=Number(a)+Number(b);
  }


  ngOnInit() {
  }

}
