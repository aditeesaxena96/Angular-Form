import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl} from '@angular/forms';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataStoreService } from '../data-store.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

@NgModule({
  imports: [ Validators, FormGroup, FormControl]
})
export class StoreComponent {
  Form1:FormGroup
   check(){
    if(this.Form1.value.pass1!==this.Form1.value.pass2)
    {
      console.log("password incorrect")
    }
    else{
     console.log("password correct");
    }
  }
    
   
  constructor(private servics : DataStoreService, private router :Router) {
    var dataformstorage =servics.getStoreData();
    this.Form1=new FormGroup({ 
      f_name:new FormControl(dataformstorage.f_name,[ Validators.required,
      Validators.maxLength(24),
    Validators.minLength(4),
    Validators.pattern("^[A-Za-z]+$")
    ]),
    l_name : new FormControl(dataformstorage.l_name,[
      Validators.required,
      Validators.maxLength(24), 
      Validators.minLength(4), 
      Validators.pattern("^[A-Za-z]+$")
    ]),
    emp_id :new FormControl(dataformstorage.emp_id,[
      Validators.required,
      Validators.maxLength(4),  
      Validators.minLength(4),
      Validators.pattern('[0-9]*')
    ]),
    mail:new FormControl(dataformstorage.mail,[
      Validators.required,
      Validators.maxLength(55),
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]),
    num :new FormControl(dataformstorage.num,[
      Validators.required,
      Validators.minLength(10),
      Validators.pattern('[0-9]*')
    ]),
    pass1 : new FormControl(dataformstorage.pass1,[
      Validators.required,
     // Validators.pattern('?=.*[0-9])(?=.*[a-z])(?=.*[$@$!%*?&()_+={};;"|,.<>]).{0,16}')

    ]),
    pass2 : new FormControl(dataformstorage.pass2,[
      Validators.required, 
     // Validators.pattern('?=.*[0-9])(?=.*[a-z])(?=.*[$@$!%*?&()_+={};;"|,.<>]).{0,16}')
    ]),
    gender :new FormControl(dataformstorage.gender,[
      Validators.required,
      Validators.minLength(1),  
      Validators.maxLength(6),  
    ]),
    });
   }

  ngOnInit() {
  }
  Data(){
    // localStorage.setItem("form_data",JSON.stringify(this.Form1.value));
      console.log(this.Form1.value);
      this.servics.store(this.Form1.value);
      this.router.navigate(['/data']);
   }

}
