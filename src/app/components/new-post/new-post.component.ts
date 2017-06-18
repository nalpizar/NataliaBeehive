import { Component, OnInit, Input } from '@angular/core';
import {Post} from './../../models/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor() { }

  title:string = 'title';

  @Input() bee;

  ngOnInit() {
  }
  
  onTitleChange(event){
    this.title = event.target.value;
  }

  onDone(){
    // ERROR TypeError: Cannot read property 'getId' of undefined
    // var newPost = new Post(66,this.bee.getId(),this.title,"title");
    // this.bee.addComment(newPost);
    // this.title = 'title';
  }

}
