import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-item',
  templateUrl: './guest-item.component.html',
  styleUrls: ['./guest-item.component.scss']
})
export class GuestItemComponent implements OnInit {

  @Input() guest: Guest;
  @Input() containerClass: string;

  constructor() { }

  ngOnInit() {
  }

}
