import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  stateCtrl: FormControl;
  customer$: Observable<Customer[]>;
  private searchTerms = new Subject<string>();

  constructor( private customerService: CustomerService) {
    this.stateCtrl = new FormControl();
    this.customer$ = this.stateCtrl.valueChanges
    .pipe( 
          //  debounceTime(300),
          //  distinctUntilChanged(),
           switchMap((term: string)=>this.customerService.searchCustomer(term)),
    );
   }

  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit() : void{
    // this.customer$ = this.searchTerms.pipe(
    //        debounceTime(300),
    //        distinctUntilChanged(),
    //        switchMap((term: string)=> this.customerService.searchCustomer(term)),
    // );
  }

}
