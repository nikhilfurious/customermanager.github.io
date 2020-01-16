import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title = "Customers Detail"
  customer : Customer[];

  newCustomer = {
    "id": "",
    "name" : "",
    "username": "",
    "phone": "",
    "email": "",
    "website" : "",
      "address": {
      "street":"",
      "city":""
    },
    "company": {}
};
  constructor(private customerService : CustomerService) { }
public selected : number;
  ngOnInit() {
    this.getHeroes();
    this.selected = 0;
  }

  getHeroes():void {
    this.customerService.getCustomers().subscribe( customers => this.customer = customers)
  }

  save(newCustomers): void {
    let id = this.customer.length + 1 ;
     newCustomers.id = id;
    this.customerService.addCustomer( newCustomers )
    .subscribe(
      customer =>{
        this.customer.push(customer);
        this.selected = 0;
        this.newCustomer = {
    "id": "",
    "name" : "",
    "username": "",
    "phone": "",
    "email": "",
    "website" : "",
    "address": {
      "street":"",
      "city":""
    },
    "company": {}
};
      }
    );
  }

  delete(customer : Customer): void {
    this.customer = this.customer.filter(h => h !== customer);
    // alert(JSON.stringify(customer));
    this.customerService.deleteCustomer(customer).subscribe();
  }
  
}
