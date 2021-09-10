import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {}
    onSubmit() {  
      //this.router.navigate(['/transfer'])  
  }
  onRecent() {  
    //this.router.navigate(['/transactions'])  
}

   

  ngOnInit(): void {
  }

}
