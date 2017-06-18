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
  // @Output() sendPostsFromBee: EventEmitter<any> = new EventEmitter;
  // @Output() sendTodosFromBee: EventEmitter<any> = new EventEmitter;
  // @Output() sendAlbums: EventEmitter<any> = new EventEmitter;

  @Output() sendBeeSelected: EventEmitter<any> = new EventEmitter;
  
  constructor() { }

  ngOnInit() {
  }

  recievedBee(bee:Bee)
  {
    // console.log(bee);
    this.sendBeeSelected.emit(bee);
  }

}
