import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { IdService } from '../id.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  addForm: any;
selectedItem: any;
  user:any; 
  costumer:any;
  message :string ='';
  submitted=false;
  editcostumerForm!: FormGroup;

  constructor(public data: DatabaseService,private uid:IdService,private url: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    
    this.data.getuser(null).subscribe(
      (result:any)=>{
        console.log(result)
        this.user = result.output;
        });

        this.data.getcostumers().subscribe(
          (result:any)=>{
            console.log(result)
            this.costumer = result.output;
            });

            this.editcostumerForm = this.formBuilder.group({
              name: ['', Validators.required],   
              email: ['', [Validators.required, Validators.maxLength(20)]],
              mobile: ['', []], 
              info:['', Validators.required], 
              location: ['', [Validators.required,Validators.maxLength(100)]]    
            });

  }


  deleteuser(user:any){
    console.log(user.id);
    this.data.deleteuser(user.id).subscribe(
      (data:any)=>{
        this.user = this.user.filter((u: any) => u !== user);
        this.message = data['message'];
        console.log(this.message);
        alert(this.message);
      }
    )
  }

  selectItem(item: any) {
      this.selectedItem = item;
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

}
