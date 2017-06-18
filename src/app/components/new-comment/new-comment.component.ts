import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from './../../models/comment';
import { CommentComponent } from './../../components/comment/comment.component';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Input() myUser;
  @Input() postSelected;

  title:string = 'title';
  body:string = 'body';

  onDone() {
    // 66 autoincremental comment
    var comment = new Comment(66, this.postSelected.getId(), this.title, this.body, this.myUser.getEmail());
    // function from post.ts
    this.postSelected.addComment(comment);
    this.title = 'title';
    this.body = 'body';
  }

  onTitleChange(event){
    this.title = event.target.value;
  }

  onTextChange(event){
    this.body = event.target.value;
  }

  ngOnInit() {
  }

}
