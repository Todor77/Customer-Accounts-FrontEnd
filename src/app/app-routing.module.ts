import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CustomerListComponent} from "./body/customer-list/customer-list.component";
import {AddAccountComponent} from "./body/add-account/add-account.component";

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent },
  { path: 'add-account', component: AddAccountComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
