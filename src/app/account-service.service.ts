import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IAccountModel, AccountModel } from './account-model'
import { ItemModel } from './item-model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // Where the backend is hosted. Currently locally with name fs_database
  uri: string = 'http://localhost:4000/fs_database/';

  // The currently logged in account.
  account: AccountModel = null;

  // Defines whether the account in account is valid or not. 
  isLoggedIn: Boolean = false;

  // Load a account from database given thee email and password of that account.
  // This account can be accessed using the @account variable.
  // Optionally, a callback function may also be provided to assist in proceeding tasks after login attempt. 
  public loadAccount(email: string, password: string, onCompleteCallback? : Function) {
    this.http.get<IAccountModel>(`${this.uri}/accounts/get`, {
      params: { email: email, password: password },
      observe: 'body',
      responseType: 'json'
    }).subscribe(data => {
      this.account = new AccountModel(
        data.id as string,
        data.email as string,
        data.password as string,
        data.username as string,
        data.address as string,
        data.history as ItemModel[])

      this.isLoggedIn = true;

      if(onCompleteCallback != null)
        onCompleteCallback();
    })
  }

  // MAJOR TODO: Fix this immediately
  public newAccount(account : AccountModel){
    this.http.post(`${this.uri}/accounts/add`, JSON.stringify(account))
  }

  public unloadAccount() {
    this.account = null;
    this.isLoggedIn = false;
  }

  constructor(private http: HttpClient) { }
}
