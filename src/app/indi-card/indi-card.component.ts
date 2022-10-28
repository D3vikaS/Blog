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
  @Input() pview=true
  constructor() { }

  ngOnInit(): void {
  }




}

