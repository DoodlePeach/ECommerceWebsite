import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { IAccountModel, AccountModel } from './account-model'
import { ItemModel } from './item-model';
import { SignupModel } from './signup-model';
import { LoginModel } from './login-model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // Where the backend is hosted. Currently locally with name fs_database
  uri: string = 'http://localhost:3000';

  // The currently logged in account.
  account: AccountModel = null;

  // Defines whether the account in account is valid or not. 
  isLoggedIn: Boolean = false;

  // Load a account from database given thee email and password of that account.
  // This account can be accessed using the @account variable.
  // Optionally, a callback function may also be provided to assist in proceeding tasks after login attempt. 
  public loadAccount(loginInfo: LoginModel, onCompleteCallback?: Function) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    this.http.post(`${this.uri}/accounts/login`, { email: loginInfo.email, password: loginInfo.password }, httpOptions
    ).subscribe((data: any) => {


      console.log(data);

      this.account = new AccountModel(
        data.account._id as string,
        data.account._id as string,
        data.account.password as string,
        data.account.username as string,
        data.account.address as string,
        data.orders as any[]);

      this.isLoggedIn = true;


      if (onCompleteCallback != null)
        onCompleteCallback();
    })
  }

  relogin() {
    console.log(this.account.email);
    console.log(this.account.password);
    this.loadAccount(new LoginModel("", this.account.email, this.account.password));
  }

  // MAJOR TODO: Fix this immediately
  public newAccount(account: SignupModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    console.log(account);
    return this.http.put(`${this.uri}/accounts/signup`, account, httpOptions);
  }

  public unloadAccount() {
    this.account = null;
    this.isLoggedIn = false;
  }

  constructor(private http: HttpClient) { }
}