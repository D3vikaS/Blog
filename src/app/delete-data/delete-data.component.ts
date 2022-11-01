import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { blogContent } from '../blogcontent';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css'],
})
export class DeleteDataComponent implements OnInit {
  @Input() blog:any;
  @Input() clickDel: any;
  @Output() deleteObj = new EventEmitter<boolean>();
  constructor() {}

  deleteData() {
    this.deleteObj.emit(true)
  }

  ngOnInit(): void {}
}
