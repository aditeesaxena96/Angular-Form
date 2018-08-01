import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
 
  item;
  constructor(private service:DataStoreService, private route : Router) {
 // this.item = JSON.parse(localStorage.getItem("form_data"));
    this.item =service.getStoreData();
   }
   edit()
   {
     console.log("hi");
     this.route.navigate(['/editted']);
     
   }
}
