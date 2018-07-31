import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
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
   storeData(){
    localStorage.setItem("form_data",JSON.stringify(this.Form1.value));
    //console.log(this.Form1.value);
  }
  constructor() {
    this.Form1=new FormGroup({ 
      f_name:new FormControl('',[ Validators.required,
      Validators.maxLength(24),
    Validators.minLength(4),
    Validators.pattern("^[A-Za-z]+$")
    ]),
    l_name : new FormControl('',[
      Validators.required,
      Validators.maxLength(24), 
      Validators.minLength(4), 
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
      Validators.maxLength(30),
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]),
    num :new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.pattern('[0-9]*')
    ]),
    pass1 : new FormControl('',[
      Validators.required,
        Validators.minLength(4), 
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

  ngOnInit() {
  }

}
