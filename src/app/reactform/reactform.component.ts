import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})

export class ReactformComponent {
   Form1:FormGroup
    pass : boolean;
   check(){
    if(this.Form1.value.pass!==this.Form1.value.cpass)
    {
        this.pass=false;
    }
    else
    {
      this.pass=true;
    }
      return this.pass;
}
  type:string="password";
    showHide(){
      if(this.type==="text")
        this.type="password";
     else
      this.type="text";   
    }  
   Data()
   {
   // localStorage.setItem("form_data",JSON.stringify(this.Form1.value));
     this.service.store(this.Form1.value);
     this.router.navigate(['/data']);
  }
  constructor(private service : DataStoreService , private router :Router) {
    var dataformstorage =service.getStoreData();
    if(dataformstorage!=null)
    {
      this.Form1=new FormGroup({ 
        f_name:new FormControl(dataformstorage.f_name,[ Validators.required,
        Validators.maxLength(24),
        Validators.minLength(1),
        Validators.pattern("^[A-Za-z]+$")
      ]),
        l_name : new FormControl(dataformstorage.l_name,[
        Validators.required,
        Validators.maxLength(24), 
        Validators.minLength(1), 
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
        Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};:"|,.<>]).{0,16})')
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
  else
  {
    this.Form1=new FormGroup({ 
      f_name:new FormControl('',[ Validators.required,
      Validators.maxLength(24),
      Validators.minLength(1),
      Validators.pattern("^[A-Za-z]+$")
    ]),
      l_name : new FormControl('',[
      Validators.required,
      Validators.maxLength(24), 
      Validators.minLength(1), 
      Validators.pattern("^[A-Za-z]+$")
    ]),
      emp_id :new FormControl('',[
      Validators.required,
      Validators.maxLength(4),  
      Validators.minLength(4),
      Validators.pattern('[0-9]*')
    ]),
      mail:new FormControl('',[
      Validators.required,
      Validators.maxLength(55),
      Validators.email
    ]),
      num :new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.pattern('[0-9]*')
    ]),
      pass1 : new FormControl('',[
      Validators.required,
      Validators.minLength(4), 
      Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};:"|,.<>]).{0,16})')
    ]),
      pass2 : new FormControl('',[
      Validators.required, 
      Validators.minLength(4), 
    ]),
      gender :new FormControl('',[
      Validators.required,
      Validators.minLength(1),  
      Validators.maxLength(6),  
    ]),
    });
   }
  }
  
  

}
