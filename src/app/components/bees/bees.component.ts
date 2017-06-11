import { Component, OnInit, Input } from '@angular/core';
import { Bee } from './../../models/Bee';
import { BeeComponent } from './../../components/bee/bee.component';

@Component({
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.css']
})
export class BeesComponent implements OnInit {

  @Input() bees;  

  
  constructor() { }

  ngOnInit() {
    
    // console.log(this.bees);  

  }

}
