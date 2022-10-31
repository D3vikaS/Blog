import { Component, OnInit } from '@angular/core';
import { blogContent } from '../blogcontent';
import { BlogServerService } from '../blog-server.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public blogService:BlogServerService) {

  }
  blogList:blogContent[] =[];




  maxLen(value:string){
    value =value.substring(0,100);
    return value;
  }


  dataToDisplay:blogContent ={} as blogContent
   preview =false
  showData(index:number){
    this.dataToDisplay=this.blogList[index]
    // this.preview =!this.preview;
    this.preview=true;
    // console.log(this.preview);
  }

  clickDelete=false
  deleteData(index:number){
    console.log("delete it"+ index);
    this.dataToDisplay=this.blogList[index]
    this.clickDelete=true;
  }

  clickEdit:boolean=false
  editData(index:Number){
    this.clickEdit = true
  }

  // to show the blog once privew button is clicked.
  visible(event :any){
    // console.log(event)
    this.preview=event

  }


  ngOnInit(): void {

    this.blogList=this.blogService.getData();
  }



}
