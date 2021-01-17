import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Message } from '../entity/message';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  listMessage: Observable<Message[]>;

  constructor(public actRoute: ActivatedRoute, public httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.listMessage = this.httpClientService.getLastMessage(sessionStorage.getItem('id_user'))
  }

}
