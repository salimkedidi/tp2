import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-view',
  templateUrl: './candidat-view.component.html',
  styleUrls: ['./candidat-view.component.css']
})
export class CandidatViewComponent implements OnInit {
  titre="Liste des candidats"
  constructor() { }
  tabCandidats = [
    {nom:'Popey',image:'../assets/popey.jpg', nb:16, parti:true},
    {nom:'Sam',image:'../assets/happy.jpg', nb:14, parti:false },
    {nom:'Donald',image:'../assets/donald.png', nb:44, parti:false}
    ];
    follow(){
      for(let t of this.tabCandidats){

        t.nb=t.nb+1;
      }
    }
    inde(d:boolean){
      let v:number;

      if(d=true){
        v=1+1}
        return v;
      
      }
      salim(d:boolean){
        let s:number;
        for (let t of this.tabCandidats)
          if (t.parti==false){
          s=1+1}
      
      return s;
    }





    

  ngOnInit() {
  }

}
