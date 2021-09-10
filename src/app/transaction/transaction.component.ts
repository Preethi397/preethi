import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  messagecode:Array<any>;
  transfertype:Array<any>;
  constructor() { 
    this.messagecode = ["CHQB","CORT","HOLD","INTC","BHOB","PHOI","PHON","REPA","SDVA"];
    this.transfertype=[
      {name:"Bank to Bank",code:"B2B"},
      {name:"Customer to Customer",code:"C2C"}]
  }
  ngOnInit(): void {
  }
handleRegister(){

}
}
