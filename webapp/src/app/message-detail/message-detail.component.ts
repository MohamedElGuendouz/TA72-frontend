import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Message } from '../entity/message';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {

  messages: Observable<Message[]>;

  constructor(public actRoute: ActivatedRoute, public http: HttpClient) { }

  ngOnInit(): void {
    this.messages = this.http.get<Message[]>('/api/messages-avec-loann/');
  }

  is_show = false;
  toggleDiv() {
    this.is_show = !this.is_show;
  }

}
