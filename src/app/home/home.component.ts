import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  Images = ['../../assets/img/post.jpg',
    '../../assets/img/post-2.jpg',
    '../../assets/img/post-3.jpg'];
  SlideOptions = {
    items: 3,
    stagePadding: 170,
    loop: true,
    nav: true,
    dots: false,
    margin: 30,
    merge: true,
    navText: ["<i class='fa fa-caret-left cYel'></i><i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i><i class='fa fa-caret-right cYel'></i>"],
  };
  CarouselOptions = { items: 3, dots: true, nav: true };
  codeCopied = false;
  editObj;
  responseError = "";
  slideArray: [] = null;
  storeArray: [] = null;
  blogArray: [] = null;
  dealsArray = [{
    offerBox: "Hahahha",
    activeStatus: true
  }, {
    offerBox: "Hahahha",
    activeStatus: true
  }, {
    offerBox: "Hahahha",
    activeStatus: true
  }, {
    offerBox: "Hahahha",
    activeStatus: true
  }, {
    offerBox: "Hahahha",
    activeStatus: true
  }, {
    offerBox: "Hahahha",
    activeStatus: true
  }, {
    offerBox: "Hahahha",
    activeStatus: true
  }];
  hiddenInput = null;
  constructor(private _dataService: DataService, private modalService: BsModalService) { }

  ngOnInit() {
    $('.owl-carousel').owlCarousel({
      items: 3,
      stagePadding: 170,
      loop: true,
      nav: true,
      dots: false,
      margin: 30,
      // merge: true,
      navText: ["<i class='fa fa-caret-left cYel'></i><i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i><i class='fa fa-caret-right cYel'></i>"],
      responsive: {
        0: {
          items: 1,
          merge: false,
          merFit: false,
          loop: true,
          stagePadding: 0,
          margin: 0,
          nav: true,
          singleItem: true
        },
        600: {
          items: 1,
          merge: false,
          loop: true,
          stagePadding: 0,
          margin: 0,
          nav: true,
          singleItem: true
        },
        1000: {
          items: 3,
          stagePadding: 170,
          margin: 30,
          // merge: true,
          mergeFit: false,
          singleItem: false,
          loop: true,
          nav: true
        }
      }
    });
    // (<HTMLElement>document.getElementsByClassName('owl-nav')[0]).classList.add('row justify-content-between');
    // setTimeout(function () {
    //   (<HTMLElement>document.getElementsByClassName('owl-nav')[0]).classList.remove('disabled');
    // }, 2000)
    // this._dataService.fetchAPI("/userDisplay/fetchSlides").subscribe(res => {
    //   if (res.data) this.slideArray = res.data;
    //   else this.errorHandler(res.message)
    // })
    // this._dataService.fetchOnlyLimit("/userDisplay/fetchTopStores", 10).subscribe(res => {
    //   if (res.data) this.storeArray = res.data;
    //   else this.errorHandler(res.message)
    // })
    // this._dataService.fetchOnlyLimit("/userDisplay/fetchTopBlogs", 5).subscribe(res => {
    //   if (res.data) this.blogArray = res.data;
    //   else this.errorHandler(res.message)
    // })
    // $("abcd").append("<h1>Hahahhah</h1>");
    this._dataService.fetchOnlyLimit("/userDisplay/fetchTopDeals", 7).subscribe(res => {
      if (res.data) {
        this.dealsArray = res.data;
        console.log(this.dealsArray);
      }
      else this.errorHandler(res.message)
    })
  }
  openModal(template: TemplateRef<any>, couponNode) {
    this.editObj = { ...couponNode };
    window.open(this.editObj.trackingLink, '_blank');
    this.modalRef = this.modalService.show(template);
  }
  openModal2(template: TemplateRef<any>, couponNode) {
    this.codeCopied = false;
    this.editObj = { ...couponNode };
    this.modalRef = this.modalService.show(template);
    this.copyToClipBoard()
  }
  copyToClipBoard() {
    const el = document.createElement('textarea');
    el.value = this.editObj.code;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    this.codeCopied = true;
    document.body.removeChild(el);
    window.open(this.editObj.trackingLink, '_blank');
  }
  copyClipboardFunc() {
    this.copyToClipBoard();
    this.codeCopied = true;
  }
  errorHandler(err) { this.responseError = "Can't load " + err + " at the moment" }
  closeError() { this.responseError = "" }
}
