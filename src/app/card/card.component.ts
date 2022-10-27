import { Component, OnInit } from '@angular/core';
import { blogContent } from '../blogcontent';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  blogList:blogContent[] =[
    {
      title:"abc",
      content:"orem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClass orem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author:"meme"
    },
    {
      title:"cdf",
      content:"orem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClass orem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author:"meme"
    },
    {
      title:"bla bla",
      content:"",
      author:"meme"
    },
    {
      title:"uauau",
      content:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author:"meme"
    },
  ]




  maxLen(value:string){
    value =value.substring(0,100);
    return value;
  }


  dataToDisplay:blogContent ={} as blogContent
  showData(index:number){
    this.dataToDisplay=this.blogList[index]


  }

  constructor() {

   }

  ngOnInit(): void {
  }



}
