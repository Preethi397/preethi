import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user= "Preethi";
totalclients=10;
trades=10;
Clientname="Shraddha";
activity="sell";
instrumentname="infosys";
transactionlimit=250000;
quantity=25;
  constructor() { }

  ngOnInit(): void {
  }

}
