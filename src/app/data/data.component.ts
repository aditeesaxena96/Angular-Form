import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
 
  item;
  constructor() {
  this.item = JSON.parse(localStorage.getItem("form_data"));
   }

  

}
