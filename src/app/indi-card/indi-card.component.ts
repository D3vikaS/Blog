import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
// import { CardComponent } from '../card/card.component';
import { blogContent } from '../blogcontent';


@Component({
  selector: 'app-indi-card',
  templateUrl: './indi-card.component.html',
  styleUrls: ['./indi-card.component.css']
})
export class IndiCardComponent implements OnInit {
  @Input() blog:blogContent={} as blogContent
  @Input() pview:any
  @Input() clickEdit:any;
  @Input() clickDel:any;
  @Output() Pv = new EventEmitter<boolean>();
  @Output() data = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

visible(){
  this.pview=false
  this.Pv.emit(this.pview)
  console.log(this.pview);

}
// ngOnChanges(changes: SimpleChanges): void {
//   console.log("this is ngchange"+this.pview);

// }

// onEditContent(evt:any){
//   let inputValue =String((evt.target as HTMLInputElement).value);
//   this.blog.content+=inputValue
//   this.data.emit(inputValue)


// }



}

