import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
//import { LoginService } from '../services/loginservice';


@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
customerid=""
clearbalance=10.0;
overdraftflag=0;
accountholdername="83020817828620";
customeraddress="";
customercity="";
customertype="B";
customer:any={};
constructor(private router:Router,private http:HttpClient
,private service:LoginService) {
}
onSubmit() {  
  this.router.navigate(['/transaction'])  
}
ngOnInit(): void {
  let obs= this.http.get('http://localhost:8080/customer/'+this.service.commoncustomer)
 obs.subscribe((result)=>
 {this.customer=result;
   
   console.log(result);

 });
}

}