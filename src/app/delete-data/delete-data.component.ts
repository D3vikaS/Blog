import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { blogContent } from '../blogcontent';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css'],
})
export class DeleteDataComponent implements OnInit {
  @Input() blog :any //:blogContent = {} as blogContent;
  // @Input() clickDel: any;
  // @Input() modalRef:any;
  // @Output() deleteObj = new EventEmitter<boolean>();
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal

  ) {}

  deleteData() {
    this.activeModal.close(true)
  }
  closeModal(){
    this.activeModal.close(false)
  }

  ngOnInit(): void {
    // console.log(this.blog)
  }
}
