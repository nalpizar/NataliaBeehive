import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bee } from './../../models/Bee';

@Component({
  selector: 'app-bee',
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.css']
})
export class BeeComponent implements OnInit {

  // @Output() currentBeeSeleted: EventEmitter<any> = new EventEmitter();
  // @Output() currentBeeTodos: EventEmitter<any> = new EventEmitter();
  // @Output() currentBeeAlbum: EventEmitter<any> = new EventEmitter();
  @Input() bee;

  @Output() sendBeeSelected = new EventEmitter();

  
  constructor() { }

  ngOnInit() {
  }

  sendBee(){
    this.sendBeeSelected.emit(this.bee);
  }
  
}

