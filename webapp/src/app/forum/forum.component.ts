import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Discussion } from '../entity/publication';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  searchText: string = "";
  forums$: Observable<Discussion[]>;

  searchForm = this.fb.group({
    content: ['', Validators.required]
  });
  filteredItems: any;
  topic: any;
  name: any;

  constructor(private http: HttpClientService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.forums$ = this.http.getDiscussions();
  }

  onSubmit() {
    this.forums$ = this.http.getDiscussions();
  }

  assignCopy(){
    this.filteredItems = Object.assign([], this.forums$);
 }
 filterItem(value){
    if(!value){
        this.assignCopy();
    } // when nothing has typed
    this.filteredItems = Object.assign([], this.forums$).filter(
       item => item.topic.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
 }

}
