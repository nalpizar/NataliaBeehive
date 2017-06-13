import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bee } from './../../models/Bee';

@Component({
  selector: 'app-bee',
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.css']
})
export class BeeComponent implements OnInit {

  @Output() currentBeeSeleted: EventEmitter<any> = new EventEmitter();
  @Output() currentBeeTodos: EventEmitter<any> = new EventEmitter();
  @Output() currentBeeAlbum: EventEmitter<any> = new EventEmitter();
  @Input() bee;

  
  constructor() { }

  ngOnInit() {
  }

  showPosts() {
    this.currentBeeSeleted.emit(this.bee.getPosts());
  }

  showTodos() {
    this.currentBeeTodos.emit(this.bee.getTodos());
  }

  showAlbums(){
    console.log('showAlbums');
    this.currentBeeAlbum.emit(this.bee.getAlbum());
  }
  
}

