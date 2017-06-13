import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bee } from './../../models/Bee';
import { BeeComponent } from './../../components/bee/bee.component';

@Component({
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.css']
})
export class BeesComponent implements OnInit {

  @Input() bees;  
  @Output() sendPostsFromBee: EventEmitter<any> = new EventEmitter;
  @Output() sendTodosFromBee: EventEmitter<any> = new EventEmitter;
  @Output() sendAlbums: EventEmitter<any> = new EventEmitter;

  
  constructor() { }

  ngOnInit() {
  }

  recieveBees(event) {
    this.sendPostsFromBee.emit(event);
  }

  recieveTodos(event) {
    this.sendTodosFromBee.emit(event);
  }

  recieveAlbums(event){
    console.log('recieveAlbums',event);
    this.sendAlbums.emit(event);
  }

}
