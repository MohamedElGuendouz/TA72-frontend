import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../../services/http-client.service';
import { DatePipe } from '@angular/common';


export class PublicationforCreate {

  constructor(
      public creatorId: number,
      public discussionId: number,
      public time: string,
      public content: string
  ) {}
}


@Component({
  selector: 'app-create-reaction',
  templateUrl: './create-reaction.component.html',
  styleUrls: ['./create-reaction.component.scss'],
  providers:[DatePipe]

})
export class CreateReactionComponent implements OnInit {
  reactionForm = this.fb.group({
    content: ['', Validators.required]
  });

  publication: PublicationforCreate = new PublicationforCreate(
    Number(sessionStorage.getItem('id_user')),
    Number(this.routeAct.snapshot.params['id'].toString()),
    Date.now().toString(),
    ""
    );

  constructor(private fb: FormBuilder, 
    private httpClientService: HttpClientService, 
    private routeAct: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.publication.time = this.datePipe.transform(Date.now(),'yyyy-MM-dd hh:mm:ss')
    this.publication.content = this.reactionForm.value.content

    this.httpClientService.createPublication(this.publication)
    .subscribe( data => {
      window.location.reload();
      alert("Publication created successfully.")
    });
  }
}
