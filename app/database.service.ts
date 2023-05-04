import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { card } from './home/card';
import { costumer } from './costumer/costumer';
import { user } from './user';
import { userid } from './login/userid';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  logedin = false;
  baseurl: string='http://localhost/finalprojectPHP/';
  

  constructor(private http: HttpClient) { }

  
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getcard(){
    return this.http.get<card[]>(this.baseurl+'cards.php'); // get all data from databse
  }

  getcostumer(id:any){
    
    return this.http.get<costumer[]>(this.baseurl+'costumer.php?id='+id); // get all data from databse
  
}
getcostumers(){
  
  return this.http.get<costumer[]>(this.baseurl+'costumerdata.php'); // get all data from databse
}

  getuser(id:any){
    if(id!=null){
    return this.http.get<user[]>(this.baseurl+'users.php?id='+id); // get all data from databse
  }
  else{
    return this.http.get<user[]>(this.baseurl+'users.php' ); // get all data from databse
  
  }
}
  

  checkuser(email:any){
    return this.http.get<userid[]>(this.baseurl+'userid.php?email='+email); 
  }
  

  deletecostumer(id:any) {
    console.log(id);
    return this.http.delete(this.baseurl+'deletec.php?id='+ id);   

  }
  editcostumer(costumer:any) {
    return this.http.put(this.baseurl+'editc.php', costumer);   
} 

addcostumer(costumer:any) {
  return this.http.post(this.baseurl+'addcostumer.php', costumer);   
}

adduser(user:any) {
  return this.http.post(this.baseurl+'adduser.php', user);   
}

addcard(card:any) {
  return this.http.post(this.baseurl+'addcard.php', card);   
}

deleteuser(id:any) {
  console.log(id);
  return this.http.delete(this.baseurl+'deletec.php?id='+ id);   

}

}
