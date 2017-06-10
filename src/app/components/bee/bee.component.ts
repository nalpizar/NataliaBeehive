import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bee',
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.css']
})
export class BeeComponent implements OnInit {

  @Input() bee;
  
  constructor() { }

  ngOnInit() {
  }

}
