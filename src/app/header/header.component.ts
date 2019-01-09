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
  }

  openSignIn() {
    this.router.navigate(['sign'], {queryParams: {'address': 'signin'}});
    this.sharedservice.isSignIn = true;
  }

  openSignUp() {
    this.router.navigate(['sign'], {queryParams: {'address': 'signup'}});
    this.sharedservice.isSignIn = true;
  }
}
