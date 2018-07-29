import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arena-card',
  templateUrl: './arena-card.component.html',
  styleUrls: ['./arena-card.component.scss']
})
export class ArenaCardComponent implements OnInit {

  isCollapsed: any;
  contactFormModalName: any;
  contactFormModalEmail: any;
  contactFormModalSubject: any;
  contactFormModalMessage: any;

  constructor() { }

  ngOnInit() {
  }

}
