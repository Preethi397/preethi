import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.css']
})
export class NavItemsComponent implements OnInit {
navitems:Array<any>;
  constructor() { 
    this.navitems = [{
      text: "Order_Placing",
      link: "order_placing"
    },
    {
      text: "Details",
      link: "details"
    },
    {
      text: "Dashboard",
      link: "dashboard"
    },
   
  ]
  }
  
  

  ngOnInit(): void {
  }

}
