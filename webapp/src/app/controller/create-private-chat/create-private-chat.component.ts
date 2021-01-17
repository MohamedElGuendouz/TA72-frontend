import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageForCreate } from '../create-message/create-message.component';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'app-create-private-chat',
  templateUrl: './create-private-chat.component.html',
  styleUrls: ['./create-private-chat.component.scss'],
  providers:[DatePipe]

})
export class CreatePrivateChatComponent implements OnInit {

  chatForm = this.fb.group({
    receiverId: ['', Validators.required],
    content: ['', Validators.required]
  });

  chat: MessageForCreate = new MessageForCreate(
    Number(sessionStorage.getItem('id_user')),
    0,
    Date.now().toString(),
    ""
    );

  constructor(private fb: FormBuilder, 
    private httpClientService: HttpClientService, 
    private routeAct: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.chat.time = this.datePipe.transform(Date.now(),'yyyy-MM-dd hh:mm:ss')
    this.chat.receiverId = Number(this.chatForm.value.receiverId)
    this.chat.content = this.chatForm.value.content
    console.log(this.chat)
    this.httpClientService.createMessage(this.chat)
    .subscribe( data => {
      window.location.reload();
      alert("Chat created successfully.")
    });
  }

  updateProfile() {
    this.chatForm.patchValue({
      content: 'Merci pour votre aide!'
    })
  }
}