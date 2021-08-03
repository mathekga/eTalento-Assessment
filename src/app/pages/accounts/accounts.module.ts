import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AccountsComponent,
  ],
  exports: [
  ],
  imports: [
    FormsModule,ReactiveFormsModule,
    CommonModule,
    AccountsRoutingModule,
    MatCardModule
  ]
})
export class AccountsModule { }
