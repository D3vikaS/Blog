import { Component, Input, OnInit } from '@angular/core';
// import { CardComponent } from '../card/card.component';
import { blogContent } from '../blogcontent';


@Component({
  selector: 'app-indi-card',
  templateUrl: './indi-card.component.html',
  styleUrls: ['./indi-card.component.css']
})
export class IndiCardComponent implements OnInit {
  @Input() blog:blogContent={} as blogContent
  constructor() { }

  ngOnInit(): void {
  }

  maxLen(value:string){
    value =value.substring(0,200);
    return value;
  }

}

