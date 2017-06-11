import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Post } from './../../models/Post';

@Component({
  selector: 'app-bee',
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.css']
})
export class BeeComponent implements OnInit {

  @Input() bee;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
  }
  
  constructor() { }

  ngOnInit() {
  }
}
