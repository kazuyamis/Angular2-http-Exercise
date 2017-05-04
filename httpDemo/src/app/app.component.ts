import { Pm25Service } from './pm25.service';
import { Http,  Response } from '@angular/http';
import { Pm25Item } from './pm25-item';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  items: Pm25Item[] = [];

  constructor(private pmservice: Pm25Service) {}

  ngOnInit() {
    this.pmservice.loadItems().subscribe((response: Response) => {
      this.items = response.json();
    });
  }
}
