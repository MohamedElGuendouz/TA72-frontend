import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-reaction',
  templateUrl: './create-reaction.component.html',
  styleUrls: ['./create-reaction.component.scss']
})
export class CreateReactionComponent implements OnInit {
  reactionForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    content: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.reactionForm.value);
  }

  updateProfile() {
    this.reactionForm.patchValue({
      name: 'El Guendouz Mohamed',
      email: 'mohamedelg@utbm.fr',
      content: 'Merci pour votre aide!'
    })
  }

  likeReaction() {

  }

  likeComment() {

  }

}
