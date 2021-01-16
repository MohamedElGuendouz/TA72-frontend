import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

export class DiscussionForCreate{
  constructor(
    public creatorId:number,
    public time:string,
    public topic:string
    ) { }
}

@Component({
  selector: 'app-create-discussion',
  templateUrl: './create-discussion.component.html',
  styleUrls: ['./create-discussion.component.scss'],
  providers:[DatePipe]
})
export class CreateDiscussionComponent implements OnInit {

  discussion: DiscussionForCreate = new DiscussionForCreate(Number(sessionStorage.getItem('id_user')),Date.now().toString(),"");

  constructor(
    private httpClientService: HttpClientService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  createDiscussion(): void {
    console.log("createDiscussion")
    console.log("before")
    console.log(this.discussion)

    this.discussion.time = this.datePipe.transform(Date.now(),'yyyy-MM-dd hh:mm:ss')

    console.log("after")
    console.log(this.discussion)

    this.httpClientService.createDiscussion(this.discussion)
        .subscribe( data => {
          alert("Discussion created successfully.");
        });

  }


}
