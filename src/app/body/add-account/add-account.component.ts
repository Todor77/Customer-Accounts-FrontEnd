import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  accountForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.accountForm = this.formBuilder.group({
      searchField: [],
      idTypeBond: [],
      idTypeIssuer: [],
      idSubTypeIssuer: [],
      isoCurrency: [],
      customerBondsOnly: [false],
      });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: submit the form data to create a new account
  }

}
