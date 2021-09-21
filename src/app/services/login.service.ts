import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  customerid: any
  id = 1
  flag: any;
  userid: any;
  custid:any;
  constructor(private http: HttpClient, private router: Router) {
    this.customerid = "83020817828620";
this.custid="";
  }
   authenticate(url:any)
   {
    this.http.get(url)
    .subscribe((result:any)=>{
      if(result==null){
        this.flag=1;
      }
      else{
      this.flag=0;
        this.userid=result.customer.customerId;
        this.router.navigate(["/dashboard"]);

      }
    },
    err=>{
      console.log(err);
      this.router.navigate(["/login"]);
    })

  }
  getcustomerid() {
    return this.customerid;
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getflag() {
    // throw new Error('Method not implemented.');
    return this.flag;
  }

}



