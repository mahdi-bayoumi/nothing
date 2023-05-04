import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IdService } from '../id.service';
import { DatabaseService } from '../database.service'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logedin = true;
  admin=true;
  isUserLoggedIn?: boolean;


  constructor(private uid:IdService,private data:DatabaseService) { }

  ngOnInit(): void {

    //if(localStorage.getItem('logedin')=='true')
      //this.logedin=true;
      window.addEventListener('storage', (event: StorageEvent) => {
        if ( localStorage.getItem('logedin')) {
            this.logedin=true;
        }
    }, false);
  }

  onclicklogout(){

    

    this.logedin=false;

    this.admin=false;
    
  }

}
