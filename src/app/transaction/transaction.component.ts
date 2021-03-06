// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { Router } from '@angular/router';
// import { LoginService } from '../services/login.service';

// @Component({
//   selector: 'app-transaction',
//   templateUrl: './transaction.component.html',
//   styleUrls: ['./transaction.component.css']
// })
// export class TransactionComponent implements OnInit {
//   messagecode: Array<any>;
//   transfertype: Array<any>;
//   transferProfile:any;
//   message:any;
  
 
//   constructor(private http: HttpClient, private router: Router, private service: LoginService) {
//     this.messagecode = ["CHQB", "CORT", "HOLD", "INTC", "BHOB", "PHOI", "PHON", "REPA", "SDVA"];
//     this.transfertype = [
//       { name: "Bank to Bank", code: "B2B" },
//       { name: "Customer to Customer", code: "C2C" }]
      
//   }
//   ngOnInit(): void {
//   }
//   apiResult = {
//     success: false,
//     error: false
//   }
 
//   handleRegister() {
//     let url = 'http://localhost:8080/transactions'
//     let payLoad = {
//       "receiveraccountholdernumber": this.transferProfile.receiveraccountholdernumber,
//       "receiveraccountholdername": this.transferProfile.receiveraccountholdername,
//       "receiverBIC":
//         { "bic": this.transferProfile.receiverBIC.bic },
//       "inramount": this.transferProfile.inramount,
//      // "customerid":
//        // { "customerid": "71319440983198" },

//       "messagecode": {
//         "messagecode": this.transferProfile.messagecode.messagecode
//       },
//       "transfertypecode": {
//         "transfertypecode": this.transferProfile.transfertypecode.transfertypecode
//       }
//     }


//     this.http.post(url, payLoad).subscribe((result) => {
//       this.message = result;
//       console.log(result);
//       this.apiResult.success = true;
//       this.apiResult.error = false;
//     }, err => {
//       console.log(this.message);
//       this.apiResult.success = false;
//       this.apiResult.error = true;
//     })

//   }

// }



import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent  {
  message:any;
  transferProfile:any;
  messageCodeList:Array<any>;
  messageCodeDropdownSchema :any;
  transferTypeList:Array<any>;
  TransferTypeDropdownSchema:any;
  // codes=[
  //   "B-Bank to Bank Tranfer",
  //   "C-Customer to Customer Transfer"
  // ]
 
  

  constructor(private router: Router,private datasvc:LoginService,private http:HttpClient ) {
    this.transferProfile={
      "receiveraccountholdernumber": '',
      "receiveraccountholdername": '',  
      "receiverbic":'',
      "instname":'',
      "inramount": '',
      "customerid": 
                    {  "customerid": localStorage.getItem('customerid') },
       
      "messagecode": {
          "messagecode": ''
          },
     "transfertypecode":{
          "transfertypecode":''
          }
     };

    this.messageCodeList = this.datasvc.getmessageCodeList();
    this.transferTypeList=this.datasvc.gettransferTypeList();
  }  
    onSubmit() {  
        this.router.navigate(['/dashboard'])  
    }  
    messagecodeSelected(data:any){
      // console.log(data);
      this.transferProfile.messagecode.messagecode=data;
    }

    transfertypeSelected(data:any){
      this.transferProfile.transfertypecode.transfertypecode=data;
    }

ngOnInit(): void {
  this.datasvc.getDataFromApi('http://localhost:8080/message')
    .subscribe((result: any) => {
      this.messageCodeList = result.map((item: any) => {
        return { name: item.messagecode, code: item.instruction };
      });
      this.messageCodeDropdownSchema={
        labelName:"",
        selectedValue:"",
        controlName:"messagecode",
        options:this.messageCodeList,
        defaultLabel:"Select messagecode"
      }
    }, err => {
      console.log(err);
    })

    this.datasvc.getDataFromApi('http://localhost:8080/transfertypes')
    .subscribe((result: any) => {
      this.transferTypeList = result.map((item: any) => {
        return { name: item.transfertypecode, code: item.transfertypedescription };
      });
      this.TransferTypeDropdownSchema={
        labelName:"",
        selectedValue:"",
        controlName:"transfertypecode",
        options:this.transferTypeList,
        defaultLabel:"Select transfertype code"
      }
    }, err => {
      console.log(err);
    })

    

}
apiResult={
  success:false,
  error:false
}

handleTransfer() {
  let url = 'http://localhost:8080/transaction'
  let payLoad = {
    "receiveraccountholdernumber": this.transferProfile.receiveraccountholdernumber,
    "receiveraccountholdername": this.transferProfile.receiveraccountholdername,  

    "inramount": this.transferProfile.inramount,
    "customerid": 
                  {  "customerid":this.datasvc.commoncustomer },
     
    
   "transfertypecode":{
        "transfertypecode":this.transferProfile.transfertypecode.transfertypecode
        }
   }
  
  
   this.http.post(url, payLoad).subscribe( result => {
    this.message=result;
    console.log(result);
    
  }, err => {
    if(err.status==200){
    // this.apiResult.success=true;
    // this.apiResult.error =false;
    localStorage.setItem("receiver",this.transferProfile.receiveraccountholdername);
    localStorage.setItem("amount",this.transferProfile.inramount);
    this.router.navigate(['/success']) 
  }
    else{
    this.apiResult.success=false;
    this.apiResult.error =true;
    }
  }
  )
  
  
}
myurl:any;
invalidname:any;
bankname:any;

getbankbybic()
{
  this.myurl="http://localhost:8080/bank/"+this.transferProfile.receiverBIC.bic;
   let response= this.http .get(this.myurl);
   response.subscribe((data)=>this.bankname=data);
   
   console.log(this.bankname);
}


}
