import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bee } from './../../models/Bee';

@Component({
  selector: 'app-bee',
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.css']
})
export class BeeComponent implements OnInit {

  @Output() sendBee = new EventEmitter();
  @Input() bee;

  
  constructor() { }

  ngOnInit() {
  }

  //onDone
  // onSeeBee() {
  //   var bee = new Bee(this.getTitle(), this.getBody());
  //   this.sendBee.emit(bee);
  //   this.getTitle() = 'title';
  //   this.getBody() = 'body';
  // }
}

