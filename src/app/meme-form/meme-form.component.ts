import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-meme-form',
  templateUrl: './meme-form.component.html',
  styleUrls: ['./meme-form.component.css']
})
export class MemeFormComponent implements OnInit {

  memeForm: FormGroup;
  memeList$ :AngularFireList<any>; //esto es del tipo observable de firebase, son asincronos con valor variable

  constructor(private formBuilder: FormBuilder, private database:AngularFireDatabase) { // aquí se engancha la base de datos
    this.createMemeForm(); 
    //hacemos una consulta a la base de datos
    this.memeList$ = this.database.list('/memes'); // signo $ es una convención para los observables
  }

  ngOnInit() {
  }

  createMemeForm() {
    this.memeForm = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addMeme() { 
    const newMeme = { //tipo inferido
      title: this.memeForm.value.title,
      image: this.memeForm.value.image,
      description: this.memeForm.value.description,
    };

    this.memeList$.push(newMeme);//esto agrega un nuevo meme

    this.memeForm.reset();
  }

}
