import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  items: TodoItem[] = [];

  loadTodoItems(){
    let request = this.http.get('assets/data.json');
    request.subscribe(response =>{
      this.items = response.json();
    });

    return request;
  }

}
