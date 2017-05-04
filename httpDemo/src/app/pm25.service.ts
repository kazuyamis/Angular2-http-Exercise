import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Pm25Item } from "app/pm25-item";


@Injectable()
export class Pm25Service {

  constructor(private http: Http) { }
  items: Pm25Item[] = [];

  loadItems() {
    let request = this.http.get('http://opendata.epa.gov.tw/ws/Data/REWXQA/?%24orderby=SiteName&%24skip=0&%24top=1000&format=json');
    request.subscribe(response => {
      this.items = response.json();
    });

    return request;
  }

}
