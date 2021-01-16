import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Publication, Reaction } from '../entity/publication';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss']
})
export class SubjectDetailComponent implements OnInit {


  id = String;
  publication: Observable<Publication>;
  reactionsList: Observable<Reaction[]>;

  constructor(public actRoute: ActivatedRoute, public http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'].toString();
    this.publication = this.http.get<Publication>('/api/publications/' + this.id);
    this.reactionsList = this.http.get<Reaction[]>('/api/get-reactions/');
  }

  is_show = false;
  toggleDiv() {
    this.is_show = !this.is_show;
  }

  saveAppareilsToServer() {

  }
}
