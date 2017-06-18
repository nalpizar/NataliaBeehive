import { Component, OnInit, Input } from '@angular/core';
import {Todo} from './../../models/todo';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  constructor() { }

  title:string = 'title';

  @Input() bee;

  ngOnInit() {
  }
  
  onTitleChange(event){
    this.title = event.target.value;
  }

  onDone(){
    var newTodo = new Todo(66,this.bee.getId(),this.title,"title");
    this.bee.addTodo(newTodo);
    this.title = 'title';
  }

}
