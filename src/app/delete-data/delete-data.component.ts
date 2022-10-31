import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {
  @Input() blog:any;
  @Input() clickDel:any;
  constructor() { }

  ngOnInit(): void {
  }

}
