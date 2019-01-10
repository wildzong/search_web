
import { Component, OnInit } from '@angular/core';

import * as html2canvas from 'html2canvas';

import { DetailOfPicture } from '../variable';

import { ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.css']
})
export class DetailPanelComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  data: any;

  lufei = [
    new DetailOfPicture('lufei1', '../../assets/lufei/lufei1.jpg', '1 of pictures of lufei'),
    new DetailOfPicture('lufei2', '../../assets/lufei/lufei2.jpg', '2 of pictures of lufei'),
    new DetailOfPicture('lufei3', '../../assets/lufei/lufei3.jpg', '3 of pictures of lufei'),
    new DetailOfPicture('lufei4', '../../assets/lufei/lufei4.jpg', '4 of pictures of lufei'),
    new DetailOfPicture('lufei5', '../../assets/lufei/lufei5.jpg', '5 of pictures of lufei'),
    new DetailOfPicture('lufei6', '../../assets/lufei/lufei6.jpg', '6 of pictures of lufei'),
    new DetailOfPicture('lufei7', '../../assets/lufei/lufei7.jpg', '7 of pictures of lufei'),
    new DetailOfPicture('lufei8', '../../assets/lufei/lufei8.jpg', '8 of pictures of lufei'),
    new DetailOfPicture('lufei9', '../../assets/lufei/lufei9.jpg', '9 of pictures of lufei'),
    new DetailOfPicture('lufei10', '../../assets/lufei/lufei10.jpg', '10 of pictures of lufei'),
    new DetailOfPicture('lufei11', '../../assets/lufei/lufei11.jpg', '11 of pictures of lufei'),
    new DetailOfPicture('lufei12', '../../assets/lufei/lufei12.jpg', '12 of pictures of lufei'),
    new DetailOfPicture('lufei13', '../../assets/lufei/lufei13.jpg', '13 of pictures of lufei'),
    new DetailOfPicture('lufei14', '../../assets/lufei/lufei14.jpg', '14 of pictures of lufei'),
    new DetailOfPicture('lufei15', '../../assets/lufei/lufei15.jpg', '15 of pictures of lufei'),
    new DetailOfPicture('lufei16', '../../assets/lufei/lufei16.jpg', '16 of pictures of lufei'),
    new DetailOfPicture('lufei17', '../../assets/lufei/lufei17.jpg', '17 of pictures of lufei'),
    new DetailOfPicture('lufei18', '../../assets/lufei/lufei18.jpg', '18 of pictures of lufei'),
    new DetailOfPicture('lufei19', '../../assets/lufei/lufei19.jpg', '19 of pictures of lufei'),
    new DetailOfPicture('lufei20', '../../assets/lufei/lufei20.jpg', '20 of pictures of lufei'),
    new DetailOfPicture('lufei21', '../../assets/lufei/lufei21.jpg', '21 of pictures of lufei'),
    new DetailOfPicture('lufei22', '../../assets/lufei/lufei22.jpg', '22 of pictures of lufei'),
    new DetailOfPicture('lufei23', '../../assets/lufei/lufei23.jpg', '23 of pictures of lufei'),
    new DetailOfPicture('lufei24', '../../assets/lufei/lufei24.jpg', '24 of pictures of lufei'),
    new DetailOfPicture('lufei25', '../../assets/lufei/lufei25.jpg', '25 of pictures of lufei'),
    new DetailOfPicture('lufei26', '../../assets/lufei/lufei26.jpg', '26 of pictures of lufei'),
    new DetailOfPicture('lufei27', '../../assets/lufei/lufei27.jpg', '27 of pictures of lufei'),
  ];

  huoying = [
    new DetailOfPicture('huoying1', '../../assets/huoying/huoying1.jpg', '1 of pictures of huoying'),
    new DetailOfPicture('huoying2', '../../assets/huoying/huoying2.jpg', '2 of pictures of huoying'),
    new DetailOfPicture('huoying3', '../../assets/huoying/huoying3.jpg', '3 of pictures of huoying'),
    new DetailOfPicture('huoying4', '../../assets/huoying/huoying4.jpg', '4 of pictures of huoying'),
    new DetailOfPicture('huoying5', '../../assets/huoying/huoying5.jpg', '5 of pictures of huoying'),
    new DetailOfPicture('huoying6', '../../assets/huoying/huoying6.jpg', '6 of pictures of huoying'),
    new DetailOfPicture('huoying7', '../../assets/huoying/huoying7.jpg', '7 of pictures of huoying'),
    new DetailOfPicture('huoying8', '../../assets/huoying/huoying8.jpg', '8 of pictures of huoying'),
    new DetailOfPicture('huoying9', '../../assets/huoying/huoying9.jpg', '9 of pictures of huoying'),
    new DetailOfPicture('huoying10', '../../assets/huoying/huoying10.jpg', '10 of pictures of huoying'),
    new DetailOfPicture('huoying11', '../../assets/huoying/huoying11.jpg', '11 of pictures of huoying'),
    new DetailOfPicture('huoying12', '../../assets/huoying/huoying12.jpg', '12 of pictures of huoying'),
    new DetailOfPicture('huoying13', '../../assets/huoying/huoying13.jpg', '13 of pictures of huoying'),
    new DetailOfPicture('huoying14', '../../assets/huoying/huoying14.jpg', '14 of pictures of huoying'),
    new DetailOfPicture('huoying15', '../../assets/huoying/huoying15.jpg', '15 of pictures of huoying'),
    new DetailOfPicture('huoying16', '../../assets/huoying/huoying16.jpg', '16 of pictures of huoying'),
    new DetailOfPicture('huoying17', '../../assets/huoying/huoying17.jpg', '17 of pictures of huoying'),
    new DetailOfPicture('huoying18', '../../assets/huoying/huoying18.jpg', '18 of pictures of huoying'),
    new DetailOfPicture('huoying19', '../../assets/huoying/huoying19.jpg', '19 of pictures of huoying'),
    new DetailOfPicture('huoying20', '../../assets/huoying/huoying20.jpg', '20 of pictures of huoying'),
    new DetailOfPicture('huoying21', '../../assets/huoying/huoying21.jpg', '21 of pictures of huoying'),
    new DetailOfPicture('huoying22', '../../assets/huoying/huoying22.jpg', '22 of pictures of huoying'),
    new DetailOfPicture('huoying23', '../../assets/huoying/huoying23.jpg', '23 of pictures of huoying'),
    new DetailOfPicture('huoying24', '../../assets/huoying/huoying24.jpg', '24 of pictures of huoying'),
    new DetailOfPicture('huoying25', '../../assets/huoying/huoying25.jpg', '25 of pictures of huoying'),
    new DetailOfPicture('huoying26', '../../assets/huoying/huoying26.jpg', '26 of pictures of huoying'),
    new DetailOfPicture('huoying27', '../../assets/huoying/huoying27.jpg', '27 of pictures of huoying'),
    new DetailOfPicture('huoying28', '../../assets/huoying/huoying28.jpg', '28 of pictures of huoying'),
    new DetailOfPicture('huoying29', '../../assets/huoying/huoying29.jpg', '29 of pictures of huoying'),
    new DetailOfPicture('huoying30', '../../assets/huoying/huoying30.jpg', '30 of pictures of huoying'),
    new DetailOfPicture('huoying31', '../../assets/huoying/huoying31.jpg', '31 of pictures of huoying'),
    new DetailOfPicture('huoying32', '../../assets/huoying/huoying32.jpg', '32 of pictures of huoying'),
    new DetailOfPicture('huoying33', '../../assets/huoying/huoying33.jpg', '33 of pictures of huoying'),
    new DetailOfPicture('huoying34', '../../assets/huoying/huoying34.jpg', '34 of pictures of huoying'),
    new DetailOfPicture('huoying35', '../../assets/huoying/huoying35.jpg', '35 of pictures of huoying'),
    new DetailOfPicture('huoying36', '../../assets/huoying/huoying36.jpg', '36 of pictures of huoying'),
    new DetailOfPicture('huoying37', '../../assets/huoying/huoying37.jpg', '37 of pictures of huoying'),
    new DetailOfPicture('huoying38', '../../assets/huoying/huoying38.jpg', '38 of pictures of huoying'),
    new DetailOfPicture('huoying39', '../../assets/huoying/huoying39.jpg', '39 of pictures of huoying'),
    new DetailOfPicture('huoying40', '../../assets/huoying/huoying40.jpg', '40 of pictures of huoying'),
    new DetailOfPicture('huoying41', '../../assets/huoying/huoying41.jpg', '41 of pictures of huoying'),
    new DetailOfPicture('huoying42', '../../assets/huoying/huoying42.jpg', '42 of pictures of huoying'),
  ];

  longmao = [
    new DetailOfPicture('longmao1', '../../assets/longmao/longmao1.jpg', '1 of pictures of longmao'),
    new DetailOfPicture('longmao2', '../../assets/longmao/longmao2.jpg', '2 of pictures of longmao'),
    new DetailOfPicture('longmao3', '../../assets/longmao/longmao3.jpg', '3 of pictures of longmao'),
    new DetailOfPicture('longmao4', '../../assets/longmao/longmao4.jpg', '4 of pictures of longmao'),
    new DetailOfPicture('longmao5', '../../assets/longmao/longmao5.jpg', '5 of pictures of longmao'),
    new DetailOfPicture('longmao6', '../../assets/longmao/longmao6.jpg', '6 of pictures of longmao'),
    new DetailOfPicture('longmao7', '../../assets/longmao/longmao7.jpg', '7 of pictures of longmao'),
    new DetailOfPicture('longmao8', '../../assets/longmao/longmao8.jpg', '8 of pictures of longmao'),
    new DetailOfPicture('longmao9', '../../assets/longmao/longmao9.jpg', '9 of pictures of longmao'),
    new DetailOfPicture('longmao10', '../../assets/longmao/longmao10.jpg', '10 of pictures of longmao'),
    new DetailOfPicture('longmao11', '../../assets/longmao/longmao11.jpg', '11 of pictures of longmao'),
    new DetailOfPicture('longmao12', '../../assets/longmao/longmao12.jpg', '12 of pictures of longmao'),
  ];

  kenan = [
    new DetailOfPicture('kenan1', '../../assets/kenan/kenan1.jpg', '1 of pictures of kenan'),
    new DetailOfPicture('kenan2', '../../assets/kenan/kenan2.jpg', '2 of pictures of kenan'),
    new DetailOfPicture('kenan3', '../../assets/kenan/kenan3.jpg', '3 of pictures of kenan'),
    new DetailOfPicture('kenan4', '../../assets/kenan/kenan4.jpg', '4 of pictures of kenan'),
    new DetailOfPicture('kenan5', '../../assets/kenan/kenan5.jpg', '5 of pictures of kenan'),
    new DetailOfPicture('kenan6', '../../assets/kenan/kenan6.jpg', '6 of pictures of kenan'),
    new DetailOfPicture('kenan7', '../../assets/kenan/kenan7.jpg', '7 of pictures of kenan'),
    new DetailOfPicture('kenan8', '../../assets/kenan/kenan8.jpg', '8 of pictures of kenan'),
    new DetailOfPicture('kenan9', '../../assets/kenan/kenan9.jpg', '9 of pictures of kenan'),
    new DetailOfPicture('kenan10', '../../assets/kenan/kenan10.jpg', '10 of pictures of kenan'),
    new DetailOfPicture('kenan11', '../../assets/kenan/kenan11.jpg', '11 of pictures of kenan'),
    new DetailOfPicture('kenan12', '../../assets/kenan/kenan12.jpg', '12 of pictures of kenan'),
    new DetailOfPicture('kenan13', '../../assets/kenan/kenan13.jpg', '13 of pictures of kenan'),
    new DetailOfPicture('kenan14', '../../assets/kenan/kenan14.jpg', '14 of pictures of kenan'),
    new DetailOfPicture('kenan15', '../../assets/kenan/kenan15.jpg', '15 of pictures of kenan'),
    new DetailOfPicture('kenan16', '../../assets/kenan/kenan16.jpg', '16 of pictures of kenan'),
    new DetailOfPicture('kenan17', '../../assets/kenan/kenan17.jpg', '17 of pictures of kenan'),
    new DetailOfPicture('kenan18', '../../assets/kenan/kenan18.jpg', '18 of pictures of kenan'),
    new DetailOfPicture('kenan19', '../../assets/kenan/kenan19.jpg', '19 of pictures of kenan'),
    new DetailOfPicture('kenan20', '../../assets/kenan/kenan20.jpg', '20 of pictures of kenan'),
    new DetailOfPicture('kenan21', '../../assets/kenan/kenan21.jpg', '21 of pictures of kenan'),
    new DetailOfPicture('kenan22', '../../assets/kenan/kenan22.jpg', '22 of pictures of kenan'),
    new DetailOfPicture('kenan23', '../../assets/kenan/kenan23.jpg', '23 of pictures of kenan'),
    new DetailOfPicture('kenan24', '../../assets/kenan/kenan24.jpg', '24 of pictures of kenan'),
    new DetailOfPicture('kenan25', '../../assets/kenan/kenan25.jpg', '25 of pictures of kenan'),
    new DetailOfPicture('kenan26', '../../assets/kenan/kenan26.jpg', '26 of pictures of kenan'),
  ];

  // get the information from route
  public param: any;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.param = params['target_name'];
      console.log(this.param);
      if (this.param === '柯南' || this.param === 'kenan') {
        this.data = this.kenan;
      } else if (this.param === '龙猫' || this.param === 'longmao') {
        this.data = this.longmao;
      } else if (this.param === '火影' || this.param === 'huoying') {
        this.data = this.huoying;
      } else if (this.param === '路飞' || this.param === '海贼王' || this.param === 'lufei') {
        this.data = this.lufei;
      } else {
        // param is empty or other keywords
      }
    });
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
