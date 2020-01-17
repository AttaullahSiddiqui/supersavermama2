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
  codeCopied = false;
  editObj;
  responseError = "";
  slideArray: [] = null;
  storeArray: [] = null;
  storeNames: [] = null;
  blogArray = [{
    title: "Loading...",
    img: "../../assets/img/post.jpg",
    _id: ""
  }, {
    title: "Loading...",
    img: "../../assets/img/post-2.jpg",
    _id: ""
  }, {
    title: "Loading...",
    img: "../../assets/img/post-3.jpg",
    _id: ""
  }, {
    title: "Loading...",
    img: "../../assets/img/post-4.jpg",
    _id: ""
  }, {
    title: "Loading...",
    img: "../../assets/img/post.jpg",
    _id: ""
  }, {
    title: "Loading...",
    img: "../../assets/img/post-3.jpg",
    _id: ""
  }, {
    title: "Loading...",
    img: "../../assets/img/post-4.jpg",
    _id: ""
  }];
  dealsArray = [{
    offerBox: "Loading...",
    activeStatus: true
  }, {
    offerBox: "Loading...",
    activeStatus: true
  }, {
    offerBox: "Loading...",
    activeStatus: true
  }, {
    offerBox: "Loading...",
    activeStatus: true
  }, {
    offerBox: "Loading...",
    activeStatus: true
  }, {
    offerBox: "Loading...",
    activeStatus: true
  }, {
    offerBox: "Loading...",
    activeStatus: true
  }];
  hiddenInput = null;
  constructor(private _dataService: DataService, private modalService: BsModalService) { }

  ngOnInit() {
    $('.owl-carousel').owlCarousel({
      items: 3,
      stagePadding: 170,
      loop: true,
      responsiveBaseElement: '#phatig',
      nav: true,
      dots: false,
      margin: 30,
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
          margin: 0,
          merge: false,
          singleItem: false,
          loop: true,
          nav: true
        }
      }
    });
    this._dataService.fetchOnlyLimit("/userDisplay/fetchTopBlogs", 7).subscribe(res => {
      if (res.data) {
        this.blogArray = res.data;
        if (window.innerWidth > 1000) {
          for (var i = 0; i < 5; i++) {
            $("#phatig2").trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
          }
        }
      }
      else this.errorHandler(res.message)
    })
    this._dataService.fetchOnlyLimit("/userDisplay/fetchTopDeals", 7).subscribe(res => {
      if (res.data) {
        this.dealsArray = res.data;
        console.log(this.dealsArray)
        if (window.innerWidth > 1000) {
          for (var i = 0; i < 5; i++) {
            $("#phatig").trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
          }
        }
      }
      else this.errorHandler(res.message)
    })
    this._dataService.fetchOnlyLimit("/userDisplay/fetchTopStoresName", 12).subscribe(res => {
      if (res.data) this.storeNames = res.data;
      else console.log(res.message)
    })
  }
  openModal(template: TemplateRef<any>, couponNode) {
    if (!couponNode.storeId) return;
    this.editObj = { ...couponNode };
    window.open(this.editObj.trackingLink, '_blank');
    this.modalRef = this.modalService.show(template);
  }
  openModal2(template: TemplateRef<any>, couponNode) {
    if (!couponNode.storeId) return;
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
