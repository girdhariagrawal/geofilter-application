import { Component } from '@angular/core';
import { getDataWithInRange } from 'geofilter-girdhariagrawal';
import GuestsMockData from '../mock-data/guests';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  guests;
  filteredGuests = [];
  activeList: string;

  constructor(private utilService: UtilService) {
    this.switchTab('PRE');
  }

  doFilter({latitude, longitude, range }: FilterRequest) {
    const filteredGuests = getDataWithInRange(this.guests, {latitude, longitude}, range);
    this.filteredGuests = this.utilService.sortData(filteredGuests, 'user_id');
  }

  /**
   * Called whenever user switch the tab between predefined guest list and custom guest list
   * @param tab
   */
  switchTab(tab: string) {
    this.activeList = tab;
    this.filteredGuests = [];
    if (tab === 'CUSTOM') {
      this.guests = [];
    }  else {
      this.guests = GuestsMockData.GUESTS;
    }
  }

  /**
   * Called whenever user changes the file
   * @param $event
   */
  fileChanged($event: any) {
    const guests = [];
    for (const line of $event.split(/[\r\n]+/)) {
      guests.push(JSON.parse(line));
    }
    this.guests = guests;
  }
}
