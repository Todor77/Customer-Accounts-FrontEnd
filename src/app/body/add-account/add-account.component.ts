import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  accountForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService) {
    this.accountForm = this.formBuilder.group({
      customerId: '',
      initialCredit: ''
      });
  }

  successMessage: string = '';

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: submit the form data to create a new account

  if(this.accountForm.get('customerId')?.value && this.accountForm.get('initialCredit')?.value) {
    const data = {
      customerId: this.accountForm.get('customerId')?.value,
      initialAmount: this.accountForm.get('initialCredit')?.value
    };
    this.openAccount1(data);
    }
  }

  openAccount(data: any) {
    this.customerService.openAccount(data).subscribe(data => {
      console.log('Account created successfully', data);
      this.successMessage = data.toString();
    }, error => {
      console.log(error);
    });
  }

  openAccount1(data: any) {
    this.customerService.openAccount(data).pipe(
        catchError(error => {
          this.successMessage = 'An error occurred while fetching data';
          return of(error);
        })
    ).subscribe(response => {
      this.successMessage = 'Successfully created account';
    });
  }
}
