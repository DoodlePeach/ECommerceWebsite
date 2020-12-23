import { Component, OnInit } from '@angular/core';
import { SignupModel } from '../signup-model';
import { AccountService } from '../account-service.service'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  model : SignupModel = new SignupModel("", "", "", "", "");
  sumbitted : Boolean = false;
  successfull : Boolean = false;

  constructor(private accountService : AccountService) { }

  onSubmit(){
    this.sumbitted = true;

    this.accountService.newAccount(this.model).subscribe((ret) => {
      this.successfull = this.sumbitted = true;
    }, (err) =>{
      this.successfull = false;
    })
  }

  ngOnInit(): void {
  }

}
