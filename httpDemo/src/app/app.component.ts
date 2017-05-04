import { Pm25Service } from './pm25.service';
import { Http, Response } from '@angular/http';
import { Pm25Item } from './pm25-item';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http app works!';

  items: Pm25Item[] = [];

  data: any;

  constructor(private pmservice: Pm25Service, private http: Http) { }

  ngOnInit() {
    // this.pmservice.loadItems().subscribe((response: Response) => {
    //   this.items = response.json();
    let url = '/ws/Data/REWXQA/?%24orderby=SiteName&%24skip=0&%24top=1000&format=json';
    this.data = this.http.get(url).map(x => x.json);

    // this.http.get('/ws/Data/REWXQA/?%24orderby=SiteName&%24skip=0&%24top=1000&format=json').subscribe(response => {
    //   this.data = response.json();
    // });

     console.log("hava data ?" , this.data);
  }
}
