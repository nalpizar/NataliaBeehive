import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.css']
})
export class BeesComponent implements OnInit {

  @Input() bees;

  constructor() { }

  ngOnInit() {
  }

}
