import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  constructor() { }
  nom:string="Popey";
  image="assets/popey.jpg";
  age=16;
  check:boolean=false;
  verif(){
    if(this.age<18){
    this.check=true;

    return true;}
  
    return false;
    
  }
  

  ngOnInit() {
  }

}
