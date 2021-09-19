import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-portfolio',
templateUrl: './portfolio.component.html',
styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

id=2;
user="shraddha";
transaction=12000000;
Instrumentid=1;
action="buy";
price=2000;
quantity=25;
status=1;
expirydate='2021-09-17';
ids:Array<any>=[
{
Instrumentid:1,
action:"buy",
price:2000,
quantity:25,
status:1,
expirydate:'2021-09-17'
},
{
Instrumentid:3,
action:"sell",
price:32000,
quantity:15,
status:0,
expirydate:'2021-09-09'
},
{
Instrumentid:2,
action:"sell",
price:1500000,
quantity:30,
status:0,
expirydate:'2021-09-10'
}
];
constructor() {
}


 ngOnInit(): void {
}

}