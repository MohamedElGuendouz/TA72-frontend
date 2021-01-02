import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessageListComponent } from './message-list/message-list.component';
import { CreateMessageComponent } from './create-message/create-message.component';
import { ForumComponent } from './forum/forum.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagerieComponent,
    MessageDetailComponent,
    MessageListComponent,
    CreateMessageComponent,
    ForumComponent,
    SubjectDetailComponent,
    SubjectListComponent,
    CreateSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
