import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IdService {

  public id:any  ;
  public email:any;
  public admin =false;
  public logedin=false;
  constructor(private http: HttpClient) { 
    
  }

  getuserid(email:any){

    this.http.get<any>('http://localhost/finalprojectPHP/userid.php?email='+email).subscribe(res=>{
      console.log(res);
       this.id=res.output;
       this.email=email;
    })

    if(email=='admin@admin'){
      this.admin=true;
    }
  }
  
}
