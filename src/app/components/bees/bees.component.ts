import { Component, OnInit, Input } from '@angular/core';
import { Bee } from './../../models/Bee';

@Component({
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.css']
})
export class BeesComponent implements OnInit {

  @Input() bees;

  yell(e) {
    alert('I am yelling');
  }
  
  constructor() { }

  ngOnInit() {
    
  

  }

}
