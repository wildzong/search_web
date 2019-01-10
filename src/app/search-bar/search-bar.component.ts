import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchKey } from '../variable';
import { Http } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  search_key: SearchKey = {
    target_name: '柯南',
    target_type: 'image',
  };

  token = document.cookie;

  // set the headers
  headers = new Headers({'Authorization': this.token});
  options = new RequestOptions({ headers: this.headers });

  constructor(private router: Router, private http: Http) {}

  ngOnInit() {
  }

  onEnter () {
    /*this.http.post('http://localhost:5000/research', this.search_key, this.options)
      .map(res => res.json())
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('Research Complete')
      );*/
    this.router.navigate(['detail'], {queryParams: {'target_name': this.search_key.target_name}});
  }

}
