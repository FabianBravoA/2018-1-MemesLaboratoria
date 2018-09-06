import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-meme-form',
  templateUrl: './meme-form.component.html',
  styleUrls: ['./meme-form.component.css']
})
export class MemeFormComponent implements OnInit {

  @Output() onMeme:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addMeme(title:string, image:string, description:string){
    this.onMeme.emit({
      title : title,
      image : image,
      description : description,
    });
  }

}
