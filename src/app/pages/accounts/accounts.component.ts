import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../../services/accounts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  AccountsList = [];
  totalBalance = 0;

  ngOnInit(): void {
    this.getAllAccounts();
  }

  //getting the accounts from the server
  private getAllAccounts() {

    this.AccountsList = [];

    this.accountService.getAccounts().subscribe(accounts => {

      if (accounts) {

        let disabled = false;

        accounts.forEach(acc => {

          //summing the balances
          this.totalBalance += +acc.balance;

          //check the accounts and see if you can perform withdraw
          if (acc.account_type === 'savings') {
            disabled = +acc.balance > 0 ? false : true;
          }

          if (acc.account_type === 'cheque') {
            disabled = +acc.balance > -500 ? false : true;
          }

          //pushing all the accounts in a array
          this.AccountsList.push({
            'accountNumber': acc.account_number,
            'type': acc.account_type,
            'balance': acc.balance,
            'disabled': disabled,
            //check if the button is active and assign it a required bootstrap class
            'class': disabled ? 'btn btn-light' : 'btn btn-success'
          });
        });
      }
    })
  }

  //withdraw button click with balance passed as parameter
  withdraw(balance) {
    alert('Successful \nYour balance: ZAR ' + balance);
  }

}


