import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../../services/http-client.service';


export class MessageForCreate{
  constructor(
    public senderId:number,
    public receiverId:number,
    public time:string,
    public content:string
    ) { }
}


@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss'],
  providers:[DatePipe]

})
export class CreateMessageComponent implements OnInit {

  messageForm = this.fb.group({
    content: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, 
    private httpClientService: HttpClientService,
    private datePipe: DatePipe,
    private actRoute: ActivatedRoute) { }

  
  message: MessageForCreate = new MessageForCreate(Number(sessionStorage.getItem('id_user')),this.actRoute.snapshot.params['id'],Date.now().toString(),"");

  ngOnInit(): void {
  }

  sendMessage(): void {
    this.message.time = this.datePipe.transform(Date.now(),'yyyy-MM-dd hh:mm:ss')

    this.httpClientService.createMessage(this.message)
        .subscribe( data => {
          window.location.reload();
          alert("Message sended successfully.");
        });

  }


}
