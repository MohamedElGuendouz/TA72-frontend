import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Message } from '../../entity/message';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.scss']
})
export class MessagerieComponent implements OnInit {
  
  currentMessage: Observable<Message>;
  listMessage: Observable<Message[]>;
  idMessage = String;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClientService: HttpClientService
  ) {}
  ngOnInit() {
    
  }
  is_show = false;
  toggleDiv() {
    this.is_show = !this.is_show;
  }

  createChat() {
    this.router.navigateByUrl('/create/chat');
  }
}
