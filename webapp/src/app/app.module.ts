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
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactionDetailComponent } from './reaction-detail/reaction-detail.component';
import { ReactionListComponent } from './reaction-list/reaction-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateReactionComponent } from './create-reaction/create-reaction.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagerieComponent,
    MessageDetailComponent,
    MessageListComponent,
    CreateMessageComponent,
    ForumComponent,
    SubjectDetailComponent,
    CreateSubjectComponent,
    CreateUserComponent,
    UserDetailComponent,
    UserListComponent,
    UpdateUserComponent,
    ReactionDetailComponent,
    ReactionListComponent,
    CreateReactionComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
