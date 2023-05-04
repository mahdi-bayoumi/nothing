import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logedin = false;
  user:any;
  
  constructor(public data: DatabaseService) { }

  ngOnInit(): void {

   if(localStorage.getItem('logedin')=='true')
      this.logedin=true;

    this.data.getuser(null).subscribe(
      (result:any)=>{
        console.log(result)
        this.user = result.output;

        }
    )
  }

}
