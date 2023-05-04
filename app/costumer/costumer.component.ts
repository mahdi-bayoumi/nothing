import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatabaseService } from '../database.service';
import { IdService } from '../id.service';

import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.css']
})
export class CostumerComponent implements OnInit {

title="costumer";

editcostumerForm!: FormGroup;
selectedItem: any;



  logedin = false;
  costumer:any; 
  addForm: any;
  addcForm:any;
  costumerid:any;
  message :string ='';

  submitted=false;


  constructor(public data: DatabaseService,private uid:IdService,
              private url: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder
             ) { 


                this.addcForm = new FormGroup({
                  userid: new FormControl(this.uid.id),
                  name: new FormControl('', Validators.required),   
                  email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
                  mobile: new FormControl('', Validators.required),
                  info: new FormControl('', [Validators.required,Validators.maxLength(100)]),
                  location: new FormControl('', Validators.required)    
                });

              }//constructer

              get e() { return this.editcostumerForm.controls; }

  ngOnInit(): void {

    if(localStorage.getItem('logedin')=='true')
      this.logedin=true;


    this.data.getcostumer(2).subscribe(
      (result:any)=>{
        console.log(result)
        this.costumer = result.output;
        });
////////////////////////////////
//edit User form validations
this.editcostumerForm = this.formBuilder.group({
  name: ['', Validators.required],   
  email: ['', [Validators.required, Validators.maxLength(20)]],
  mobile: ['', []], 
  info:['', Validators.required], 
  location: ['', [Validators.required,Validators.maxLength(100)]]    
});
this.costumerid = this.url.snapshot.params['id'];

if (this.costumerid>0) {
  this.data.getcostumer(this.costumerid).subscribe(
    (result:any)=>{
      console.log(result.output);
      this.addForm.patchValue(result.output[0]);
})

  }

}

  deleteContact(contact:any){
    console.log(contact.id);
    this.data.deletecostumer(contact.id).subscribe(
      (data:any)=>{
        this.costumer = this.costumer.filter((u: any) => u !== contact);
        this.message = data['message'];
        console.log(this.message);
        alert(this.message);
      }
    )
  }

  onEdit(){
    this.data.editcostumer(this.addForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.router.navigate(['/costumer']); 
        this.message = data['message'];
        console.log(this.message);
        alert(this.message);  
      })
     
  }


  onSubmitaddc(){
    this.data.addcostumer(this.addcForm.value).subscribe(
    (data:any)=>{
      this.router.navigate(['/user']); 
      this.message = data['message'];
      console.log(this.message);
        alert(this.message);
  });
    }

    onSubmit() {
    
      this.submitted = true;
      // stop here if form is invalid
      if (this.editcostumerForm.invalid) {
          return;
      }
      //True if all the fields are filled
      if(this.submitted)
      {
        alert("Great!!");
      }
     
    }

    selectItem(item: any) {
      this.selectedItem = item;
    }

}
