import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SharedService } from '../variable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  signIn = false;
  signUp = false;

  constructor(private router: Router, private sharedservice: SharedService) { }

  ngOnInit() {
    if (document.cookie !== '') {
      this.sharedservice.isCookieEmpty = false;
      this.sharedservice.isSignIn = true;
    } else {
      this.sharedservice.isCookieEmpty = true;
      this.sharedservice.isSignIn = false;
    }
  }

  openSignIn() {
    this.router.navigate(['sign'], {queryParams: {'address': 'signin'}});
    this.sharedservice.isSignIn = true;
  }

  openSignUp() {
    this.router.navigate(['sign'], {queryParams: {'address': 'signup'}});
    this.sharedservice.isSignIn = true;
  }

  dropDown() {
    document.getElementById('user-info').classList.add('open');
  }

  closeDropDown() {
    document.getElementById('user-info').classList.remove('open');
  }
}
