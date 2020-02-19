import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  @Input() guestList: GuestList;
  @Input() containerClass: string;
  @Input() childContainerClass: string;
  constructor() { }

  ngOnInit() {
  }

}
