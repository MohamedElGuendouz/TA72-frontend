import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Apercu, Message } from '../entity/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  lastMessage: Observable<Apercu[]>;

  constructor(public actRoute: ActivatedRoute, public http: HttpClient) { }

  ngOnInit(): void {
    this.lastMessage = this.http.get<Apercu[]>('/api/last-messages/');
  }

}
