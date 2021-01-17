import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Message } from 'src/app/entity/message';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {

  messages: Observable<Message[]>;

  constructor(public actRoute: ActivatedRoute, public httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.messages = this.httpClientService.getMessageById(sessionStorage.getItem('id_user'), this.actRoute.snapshot.params['id'])
  }

  is_show = false;
  toggleDiv() {
    this.is_show = !this.is_show;
  }

}
