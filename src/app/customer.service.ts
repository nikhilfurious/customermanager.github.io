import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Customer } from './Customer';
import { CUSTOMERS } from './mock-customers';


  const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  };

@Injectable()
export class CustomerService {

  private customersUrl = 'api/CUSTOMERS';

  constructor(
    private http : HttpClient
  ) { }

  getCustomers(): Observable<Customer[]> {
    // return of(CUSTOMERS);
    return this.http.get<Customer[]>(this.customersUrl)
    .pipe(
      catchError(this.handleError('getCustomers', []))
    )
  }

  upateCustomer(customer : Customer): Observable<any> {
    return this.http.put(this.customersUrl, customer, httpOptions).pipe(
      catchError(this.handleError<any>('updateCustomer'))
    );
  }

  getCustomer(id: number): Observable<Customer> {
    return of(CUSTOMERS.find(customer => customer.id === id));
  }

  addCustomer( customer: Customer): Observable<Customer> {
    // alert(JSON.stringify(customer);
    return this.http.post<Customer>(this.customersUrl, customer, httpOptions).pipe(
      catchError(this.handleError<Customer>('addCustomer'))
    );
  }

  deleteCustomer( customer :Customer ): Observable<Customer>{
    const id = typeof customer == 'number' ? customer : customer.id;
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete<Customer>(url, httpOptions).pipe(
      catchError(this.handleError<Customer>('deleteCustomer'))
    );
  }

  searchCustomer(term: String): Observable<Customer[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Customer[]>(`api/CUSTOMERS/?name=${term}`).pipe(
      catchError(this.handleError<Customer[]>('searchCustomer', []))
    );
  } 

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
