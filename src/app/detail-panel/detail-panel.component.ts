import { Component, OnInit } from '@angular/core';

import * as html2canvas from 'html2canvas';

import { DetailOfPicture } from '../variable';

import * as $ from 'jquery';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.css']
})
export class DetailPanelComponent implements OnInit {

  data = [
    new DetailOfPicture('longmao1', '/images/lufei2.jpg', 'first picture of longmao'),
    new DetailOfPicture('longmao2', '/images/lufei3.jpg', 'picture of longmao'),
    new DetailOfPicture('longmao3', '../../assets/index3.jpg', 'third picture of longmao'),
    new DetailOfPicture('longmao4', '../../assets/index.jpeg', 'first picture of longmao'),
    new DetailOfPicture('longmao5', '../../assets/index2.jpg', 'picture of longmao'),
    new DetailOfPicture('longmao6', '../../assets/index3.jpg', 'third picture of longmao'),
  ];

  constructor() { }

  ngOnInit() {
  }

  displayDownload(id: string) {
    document.getElementById(id).classList.remove('display-None');
    document.getElementById(id).classList.add('display-Block');
  }

  hideDownload(id: string) {
    document.getElementById(id).classList.remove('display-Block');
    document.getElementById(id).classList.add('display-None');
  }

}
