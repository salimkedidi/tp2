import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  nom:string="Salim";
  age=21;
  actif:boolean=true;
  contenu:string=" ";
  message="DSI";
  constructor() { }
  info(){
    return this.nom+" a pour âge "+this.age;
  }
  onAfficher(){
    console.log(this.nom);
  }
  onKeyUp(event:KeyboardEvent) { 
    this.contenu = 'Bonjou '+(<HTMLInputElement>event.target).value; }
  onAfficherContenu(val:string)
    { console.log(val); }
    
}



