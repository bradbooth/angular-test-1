import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {

  contactFormModalName: any;
  contactFormModalEmail: any;
  contactFormModalSubject: any;
  contactFormModalMessage: any;
  
  constructor() { }

  ngOnInit() {
  }

}
