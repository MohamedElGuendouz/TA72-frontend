import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Publication } from '../entity/publication';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  forums$: Observable<Publication[]> = this.http.get<Publication[]>('/api/publications');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
