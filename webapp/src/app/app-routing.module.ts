import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDiscussionComponent } from './controller/create-discussion/create-discussion.component';
import { CreatePrivateChatComponent } from './controller/create-private-chat/create-private-chat.component';
import { ForumComponent } from './views/forum/forum.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { MessageListComponent } from './views/message-list/message-list.component';
import { MessagerieComponent } from './views/messagerie/messagerie.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { SignupComponent } from './views/signup/signup.component';
import { DiscussionComponent } from './views/discussion/discussion.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  { path: '', component:  ForumComponent,canActivate:[AuthGaurdService]},
  { path: 'discussion/:id', component:  DiscussionComponent,canActivate:[AuthGaurdService]},
  { path: 'messagerie/:id', component:  MessagerieComponent,canActivate:[AuthGaurdService]},
  { path: 'create/discussion', component: CreateDiscussionComponent,canActivate:[AuthGaurdService]},
  { path: 'create/chat', component: CreatePrivateChatComponent,canActivate:[AuthGaurdService]},
  { path: 'forum', component: ForumComponent,canActivate:[AuthGaurdService]},
  { path: 'messagerie', component: MessagerieComponent,canActivate:[AuthGaurdService] },
  { path: 'message-list', component: MessageListComponent,canActivate:[AuthGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
