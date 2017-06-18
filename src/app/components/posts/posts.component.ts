import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() bee;
  @Input() myUser;
  @Output() getPost = new EventEmitter;

  myPost(event){
      this.getPost.emit(event);
      // console.log(event);
  }

  constructor() { }

  ngOnInit() {}

}
