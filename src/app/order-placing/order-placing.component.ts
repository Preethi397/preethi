import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-placing',
  templateUrl: './order-placing.component.html',
  styleUrls: ['./order-placing.component.css']
})
export class OrderPlacingComponent implements OnInit {


  clientid: Array<any>;
  instrumentid: Array<any>;
  direction: Array<any>;
  order: FormGroup;
  //  number="^[0-9]+$";
  //  validators:Array<any>;
  constructor() {
    this.clientid = ['DBS001', 'DBS002', 'DBS003', 'DBS004', 'DBS005', 'DBS006', 'DBS007', 'DBS008', 'DBS009', 'DBS010', 'DBS011',
      'DBS012', 'DBS013', 'DBS014', 'DBS015', 'DBS016', 'DBS017', 'DBS018', 'DBS019', 'DBS020', 'DBS021', 'DBS022',
      'DBS023', 'DBS024', 'DBS025', 'DBS026', 'DBS027', 'DBS028', 'DBS029', 'DBS030', 'DBS031', 'DBS032', 'DBS033'];
    this.instrumentid = [1001, 1002, 1003, 1004, 1005];
    this.direction = ['Buy', 'Sell'];
    this.order = new FormGroup({
      price: new FormControl("", [
        Validators.required,
        
        Validators.pattern(/^[0-9]+(\.[0-9]+)?$/)
    
      ]),
      quantity: new FormControl("", [
        // validators: [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ])
    });

  }

  ngOnInit(): void {
  }
  handleSubmit() {

  }
}
