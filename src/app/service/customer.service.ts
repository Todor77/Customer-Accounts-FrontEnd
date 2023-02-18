import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl + 'customers'}`);
  }

  getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCustomerAccount(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomerTransactions(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/transactions`);
  }

  openAccount(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl + 'v2/openAccount'}`,data)
  }
}

export interface Customer {
  customerId: number;
  name: string;
  initialCredit: number;
  account: Account;
}

export interface Account {
  accountNumber: number;
  transactions: Transaction[];
}

export interface Transaction {
  transactionId: string;
  description: string;
  amount: number;
}
