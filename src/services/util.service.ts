import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /**
   * Sort the provided records as per provided parameters
   * @param records array of records
   * @param sortByKey key in object on which sorting will be done
   * @param sortingOrder order of sorting 'asc' or 'desc' (default: 'asc')
   */
  sortData(records, sortByKey, sortingOrder = 'asc') {
    let value = 1;
    switch (sortingOrder) {
      case 'asc':
        value = 1;
        break;
      case 'desc':
        value = -1;
        break;
    }
    return records.sort((record1, record2) => {
      return record1[sortByKey] > record2[sortByKey] ? value : -value;
    });
  }
}
