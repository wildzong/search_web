import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { UserSignUp } from '../variable';

@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.css']
})
export class SignInUpComponent implements OnInit {

  isSignIn = true;
  isSignUp = false;

  // countDown is used as a number to count down
  countDown: number;

  // whether the email is send or not
  isSendEmail = false;

  data: any;

  // the data structure of user
  userSignIn: UserSignUp = {
    email: '',
    password: ''
  };

  constructor(public activeRoute: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.data = params['address'];
    });

    console.log(this.data.tostring);

  }

  openSignIn() {
    this.isSignIn = true;
    this.isSignUp = false;

  }

  openSignUp() {
    this.isSignIn = false;
    this.isSignUp = true;
  }

  SendEmail() {
    this.isSendEmail = true;
    this.CountDown();

    console.log(this.userSignIn);
    const SignUp = new URLSearchParams();
    SignUp.append('emial', this.userSignIn.email);
    SignUp.append('password', this.userSignIn.password);

    this.http.post('http://47.107.37.65/emailcode', SignUp)
      .map(res => res.json())
      .subscribe(data => {
        alert(JSON.stringify(data));
      }, err => {
        console.error('ERROR', err);
      });
  }

  CountDown() {
    this.countDown = 120;
  }

}

