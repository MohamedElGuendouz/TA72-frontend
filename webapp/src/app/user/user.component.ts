import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Publication } from '../entity/publication';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  publications:Observable<Publication[]>;

  constructor(
    private httpClientService:HttpClientService
    ) {  

    }

  ngOnInit(): void {

    
    this.httpClientService.getPublications().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  handleSuccessfulResponse(response)
  {
    this.publications=response;
  }


}
