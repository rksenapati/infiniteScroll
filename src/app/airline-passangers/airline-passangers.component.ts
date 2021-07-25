import { ApiServiceService } from './../api-service.service';
import { Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-airline-passangers',
  templateUrl: './airline-passangers.component.html',
  styleUrls: ['./airline-passangers.component.scss']
})
export class AirlinePassangersComponent implements OnInit, AfterViewInit {
  @ViewChildren('theLastList', { read: ElementRef })
  theLastList: QueryList<ElementRef> | any;
  passSub: Subscription | undefined;
  passDtl: any;
  totalPages: number;
  currentPage: number;
  observer: any;
  constructor(private apiService: ApiServiceService) {
    this.passDtl = [];
    this.totalPages = 0;
    this.currentPage = 0;
  }

  ngOnInit(): void {
    this.getAirlines();
    this.interSectionObserve();
  }
  ngAfterViewInit() {
    this.theLastList.changes.subscribe((d: any) => {
      if (d.last) this.observer.observe(d.last.nativeElement);
    })
  }
  getAirlines() {
    this.passSub = this.apiService.getUsers(this.currentPage).subscribe(data => {
      this.passDtl = [...this.passDtl,...data.data];
      this.totalPages = data.total;
      console.log(data);
    })
  }
  interSectionObserve() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
          this.getAirlines();
        }
      }
    }, options)
  }
}
