import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Publication } from '../entity/publication';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  searchText: string = "";
  forums$: Observable<Publication[]> = this.http.get<Publication[]>('/api/publications');

  searchForm = this.fb.group({
    content: ['', Validators.required]
  });

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("ok2")
    if (this.searchText == "") {
      this.forums$ = this.http.get<Publication[]>('/api/publications');

    } else {
      this.forums$ = this.http.get<Publication[]>('/api/publications/_search?subject=' + this.searchText);
    }
  }

}
