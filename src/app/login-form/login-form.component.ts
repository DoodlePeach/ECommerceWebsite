import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../login-model'
import { AccountService } from '../account-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model: LoginModel = new LoginModel("", "", "");
  submitted: Boolean = false;
  successfull: Boolean = false;

  constructor(
    private accountService: AccountService,
    private router: Router) { }

  onSubmit() {
    this.submitted = true;
    this.accountService.loadAccount(this.model, () => {
      if (this.accountService.isLoggedIn) {
        this.router.navigate(['/']);
        this.successfull = this.accountService.isLoggedIn;
      }
    });
}

ngOnInit(): void {
}

}
