import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Discussion, Publication } from 'src/app/entity/publication';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  discussion: Observable<Discussion>;
  publications: Observable<Publication[]>;
  id = String;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClientService: HttpClientService
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'].toString();
    this.discussion = this.httpClientService.getDiscussionsById(this.id)
    this.publications = this.httpClientService.getPublications(this.id)
    
    console.log(this.discussion)
    console.log(this.publications)
  }
  is_show = false;
  toggleDiv() {
    this.is_show = !this.is_show;
  }
}
