import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatabaseService } from '../database.service';
import { IdService } from '../id.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  logedin=false;
  user:any;
userid:any =2;//=localStorage.getItem('id');


  constructor(
    public data: DatabaseService,private uid:IdService,
              private url: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('logedin')=='true')
      this.logedin=true;
      


    this.data.getuser(this.userid).subscribe(
      (result:any)=>{
        console.log(result)
        this.user = result.output;
        });

  }

}
