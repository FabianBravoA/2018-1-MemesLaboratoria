import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meme-feed',
  templateUrl: './meme-feed.component.html',
  styleUrls: ['./meme-feed.component.css']
})
export class MemeFeedComponent implements OnInit {
  memes$:Observable<any>; 

  constructor(private database:AngularFireDatabase) {
    this.memes$ = this.database.list('/memes').valueChanges(); // esto es como el change, se va actualizando todo
  }

  ngOnInit() {
  }

}
