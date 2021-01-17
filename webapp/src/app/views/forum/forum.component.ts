import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Discussion } from '../../entity/publication';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from '../../services/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  searchText: string = "";
  forums$: Observable<Discussion[]>;
  idPublication: number;
  searchForm = this.fb.group({
    content: ['', Validators.required]
  });

  constructor(private http: HttpClientService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.forums$ = this.http.getDiscussions();
  }

  createDiscussion() {
    this.router.navigateByUrl('/create/discussion');
  }

  onSubmit() {
    this.forums$ = this.http.searchDiscussions(this.searchText);
  }


}
