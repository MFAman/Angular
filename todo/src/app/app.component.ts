import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'todo';

  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.itmes.filter(item => !item.done);
  }

  addItem(newItem:string){
    if(newItem != ""){
      this.model.itmes.push(new TodoItem(newItem, false));
    }
  }
}

