import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

import { DatabaseService } from '../database.service';
import { IdService } from '../id.service';

import {FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logedin=false;
  id:any;
  email:string='';
  loginForm!: FormGroup;
  message :any;
  success:any;


  




  constructor(public data: DatabaseService,private uid:IdService,
    private url: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
      
     }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({  
      email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20)])
         
    });
  }

  onclicklogin(email:any){
  if(email!=null){
   this.data.checkuser(email).subscribe(
      (data:any)=>{
        this.success = data["success"];
        localStorage.setItem('id',data.output);
        alert("login succesfully  "+this.id); 
        console.log(data); 
        if(this.success=="1"){
          this.logedin=true;
          console.log('you logged in successfuly');
          localStorage.setItem('logedin','true');
          localStorage.setItem('id',this.id);
          this.router.navigate(['/cv']);
        }  
      })
    }
    else{
      alert('please enter your email');
    }

     


      
      
  }



  
}
