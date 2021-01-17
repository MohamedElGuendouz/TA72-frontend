import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagerieComponent } from './views/messagerie/messagerie.component';
import { MessageListComponent } from './views/message-list/message-list.component';
import { CreateMessageComponent } from './controller/create-message/create-message.component';
import { ForumComponent } from './views/forum/forum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateReactionComponent } from './controller/create-reaction/create-reaction.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { BasicAuthHttpInterceptorService } from './services/basic-auth-http-interceptor.service';
import { CreateDiscussionComponent } from './controller/create-discussion/create-discussion.component';

import { SignupComponent } from './views/signup/signup.component';
import { CreatePrivateChatComponent } from './controller/create-private-chat/create-private-chat.component';
import { HeaderComponent } from './views/header/header.component';
import { MessageDetailComponent } from './views/message-detail/message-detail.component';
import { DiscussionComponent } from './views/discussion/discussion.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagerieComponent,
    MessageDetailComponent,
    MessageListComponent,
    CreateMessageComponent,
    ForumComponent,
    CreateReactionComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    CreateDiscussionComponent,
    DiscussionComponent,
    SignupComponent,
    CreatePrivateChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { 
      provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true 
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
