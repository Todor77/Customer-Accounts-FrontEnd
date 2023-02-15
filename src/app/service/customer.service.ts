import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCustomerAccount(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/account`);
  }

  getCustomerTransactions(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/transactions`);
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