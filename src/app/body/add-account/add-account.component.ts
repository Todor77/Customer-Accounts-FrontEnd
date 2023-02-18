import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";

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

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: submit the form data to create a new account

  if(this.accountForm.get('customerId')?.value && this.accountForm.get('initialCredit')?.value) {
    const data = {
      customer_id: this.accountForm.get('customerId')?.value,
      initial_credit: this.accountForm.get('initialCredit')?.value
    };

    this.customerService.openAccount(data).subscribe(data => {
      console.log('Account created successfully', data);
      // TODO: handle success response
    });
  }





  }
}
