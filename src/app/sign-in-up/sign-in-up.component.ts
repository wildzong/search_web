import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { UserSignUp, SendEmail, UserLogIn, SharedService } from '../variable';

@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.css']
})
export class SignInUpComponent implements OnInit {

  isSignIn = true;
  isSignUp = false;

  // the words in the sign up button
  SendEmailButton = 'Send';

  // countDown is used as a number to count down
  countDown: number;

  // whether the email is send or not
  isSendEmail = false;

  address: any;

  // the data structure of user
  userSignIn: UserSignUp = {
    nickname: '',
    email: '',
    password: '',
    mailcode: '',
  };

  // the data structure of user when log in
  userLogIn: UserLogIn = {
    email: '',
    password: '',
  };

  // is all the info for signing up prepared
  isSignUpInfo = false;

  // Reg for mail
  reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$');
  isMailRight = false;

  // the info for sign in
  isSignInInfo = false;

  constructor(
    public activeRoute: ActivatedRoute,
    private http: Http,
    private router: Router,
    private sharedservice: SharedService) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.address = params['address'];
    });

    // navigete to sign in or sign up page
    if (this.address === 'signin') {
      this.isSignIn = true;
      this.isSignUp = false;
    } else if (this.address === 'signup') {
      this.isSignIn = false;
      this.isSignUp = true;
    }

    // check the mail of sign in
    if (this.reg.test(this.userSignIn.email)) {
      this.isMailRight = true;
    } else {
      this.isMailRight = false;
    }

    // check the mail of sign up
    if (this.reg.test(this.userLogIn.email) && this.userLogIn.password !== '') {
      this.isSignInInfo = true;
    } else {
      this.isSignInInfo = false;
    }

    if (this.reg.test(this.userSignIn.email) && this.userSignIn.mailcode !== ''
          && this.userSignIn.nickname !== '' && this.userSignIn.password !== '') {
            this.isSignUpInfo = true;
          }

  }

  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.

    // check the mail of sign in
    if (this.reg.test(this.userSignIn.email)) {
      this.isMailRight = true;
    } else {
      this.isMailRight = false;
    }

    // check the mail of sign up
    if (this.reg.test(this.userLogIn.email) && this.userLogIn.password !== '') {
      this.isSignInInfo = true;
    } else {
      this.isSignInInfo = false;
    }

    if (this.reg.test(this.userSignIn.email) && this.userSignIn.mailcode !== ''
          && this.userSignIn.nickname !== '' && this.userSignIn.password !== '') {
            this.isSignUpInfo = true;
          }
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

    this.SendEmailButton = '60s';

    this.isSendEmail = true;
    setTimeout(() => {
      this.isSendEmail = false;
      this.SendEmailButton = 'ReSend';
    }, 5000);

    console.log(this.userSignIn);

    const sendEmail: SendEmail = {
      nickname: this.userSignIn.nickname,
      email: this.userSignIn.email,
    };

    this.http.post('http://localhost:5000/emailcode', sendEmail)
      .map(res => res.json())
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('Send EmailCode Complete')
      );
  }

  Register() {
    console.log(this.userSignIn);
    this.http.post('http://localhost:5000/register', this.userSignIn)
      .map(res => res.json())
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('Register Complete')
      );
  }

  LogIn() {
    this.http.post('http://localhost:5000/login', this.userLogIn)
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          if (data.re_code === '0') {
            document.cookie = data.token;
            this.router.navigate(['home']);
            this.sharedservice.isCookieEmpty = false;
            this.sharedservice.isSignIn = true;
          }
        },
        err => console.log(err),
        () => console.log('Log In Complete')
      );

      if (document.cookie !== '') {
        console.log(true);
      }
  }

}

