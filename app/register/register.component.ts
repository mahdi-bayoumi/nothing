import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { IdService } from '../id.service';

import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  logedin = false;


  adduForm!: FormGroup;
 
  userid:any;
  message :string ='';
  success:string ='';
  submitted=false;




  constructor(public data: DatabaseService,private uid:IdService,
    private url: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder ) {

      this.adduForm = new FormGroup({
        
        name: new FormControl('', Validators.required),   
        email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        mobile: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required,Validators.maxLength(100)]),
        title: new FormControl('', Validators.required),
        skills: new FormControl('', Validators.required),
        experience: new FormControl('', Validators.required)     
      });

     }

     get e() { return this.adduForm.controls; }

  ngOnInit(): void {
  }


  onSubmitaddu(){
    this.data.adduser(this.adduForm.value).subscribe(
    (data:any)=>{
      //
      this.success =data['success'] 
      this.message = data['message'];
      console.log(this.message);
        alert(this.message);
        this.router.navigate(['/login']);
        this.data.addcard(this.adduForm.value).subscribe(
          (data:any)=>{
            console.log(data['message']);
             
        }
        );
  }
  );
  if(this.success=='1'){
    
    
  }
    }
}



