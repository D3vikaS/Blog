import { Component, OnInit } from '@angular/core';
import { blogContent } from '../blogcontent';
import { BlogServerService } from '../blog-server.service';
import { DeleteDataComponent } from '../delete-data/delete-data.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(public blogService: BlogServerService) {}
  blogList: blogContent[] = [];

  maxLen(value: string) {
    value = value.substring(0, 100);
    return value;
  }

  // sending data to preview component
  // dataToDisplay is single object and that goes to blog
  dataToDisplay: blogContent = {} as blogContent;
  preview = false;
  showData(index: number) {
    this.dataToDisplay = this.blogList[index];
    this.preview = true;
  }

  // to show the blog once privew button is clicked.
  visible(event: any) {
    this.preview = event;
    this.clickEdit = false;
  }

  //  edit data
  clickEdit: boolean = false;
  editData(index: Number) {
    this.clickEdit = true;
  }

  // sending blog data to delete component
  clickDelete = false;
  deleteDAta = false;
  indexValue = 0;
  deleteData(index: number) {
    console.log('delete it' + index);
    this.dataToDisplay = this.blogList[index];
    this.clickDelete = true;
    this.indexValue = index;
  }

  //adding value to blog content
  sureDelete(event: any) {
    if (event === true) {
      this.deleteDAta = true;
      if (this.deleteDAta == true) {
        this.blogList.splice(this.indexValue, 1);
        
      }
    }
  }

  ngOnInit(): void {
    this.blogList = this.blogService.getData();
  }
}
