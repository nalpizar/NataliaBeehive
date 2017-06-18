import { Component, OnInit, Input } from '@angular/core';
import {Post} from './../../models/post';

@Component({
  selector: 'app-bee-activity',
  templateUrl: './bee-activity.component.html',
  styleUrls: ['./bee-activity.component.css']
})
export class BeeActivityComponent implements OnInit {

  constructor() { }

  @Input() bee;
  @Input() myUser;

  postSelected:Post;

  
  myPostSelected(event){
    this.postSelected = event;
    // console.log('from bee-activity: ' + event.getId())

  }

  ngOnInit() {
  }

}
