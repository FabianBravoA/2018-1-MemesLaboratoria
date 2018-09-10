import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meme-form',
  templateUrl: './meme-form.component.html',
  styleUrls: ['./meme-form.component.css']
})
export class MemeFormComponent implements OnInit {

  @Output() onMeme: EventEmitter<any> = new EventEmitter<any>();
  memeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createMemeForm();
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
    this.onMeme.emit({
      title: this.memeForm.value.title,
      image: this.memeForm.value.image,
      description: this.memeForm.value.description,
    });

    this.memeForm.reset();
  }

}
