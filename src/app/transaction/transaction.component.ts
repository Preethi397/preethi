import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  messagecode: Array<any>;
  transfertype: Array<any>;
  transferProfile:any;
  message:any;
  
 
  constructor(private http: HttpClient, private router: Router, private service: LoginService) {
    this.messagecode = ["CHQB", "CORT", "HOLD", "INTC", "BHOB", "PHOI", "PHON", "REPA", "SDVA"];
    this.transfertype = [
      { name: "Bank to Bank", code: "B2B" },
      { name: "Customer to Customer", code: "C2C" }]
      
  }
  ngOnInit(): void {
  }
  apiResult = {
    success: false,
    error: false
  }
 
  handleRegister() {
    let url = 'http://localhost:8080/transactions'
    let payLoad = {
      "receiveraccountholdernumber": this.transferProfile.receiveraccountholdernumber,
      "receiveraccountholdername": this.transferProfile.receiveraccountholdername,
      "receiverBIC":
        { "bic": this.transferProfile.receiverBIC.bic },
      "inramount": this.transferProfile.inramount,
     // "customerid":
       // { "customerid": "71319440983198" },

      "messagecode": {
        "messagecode": this.transferProfile.messagecode.messagecode
      },
      "transfertypecode": {
        "transfertypecode": this.transferProfile.transfertypecode.transfertypecode
      }
    }


    this.http.post(url, payLoad).subscribe((result) => {
      this.message = result;
      console.log(result);
      this.apiResult.success = true;
      this.apiResult.error = false;
    }, err => {
      console.log(this.message);
      this.apiResult.success = false;
      this.apiResult.error = true;
    })

  }

}
