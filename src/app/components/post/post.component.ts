import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// import { Comment } from './../../models/comment';
// import { CommentComponent } from './../../components/comment/comment.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post;
  @Input() myUser;
  @Output() sendPost = new EventEmitter;

  sendCurrentPost(post){
    this.sendPost.emit(post);
  }

  constructor() { }

  ngOnInit() {

  }

  

}
