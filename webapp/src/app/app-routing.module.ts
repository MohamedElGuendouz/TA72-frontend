import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDiscussionComponent } from './create-discussion/create-discussion.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { ForumService } from './forum.service';
import { ForumComponent } from './forum/forum.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { SignupComponent } from './signup/signup.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  { path: '', component:  ForumComponent,canActivate:[AuthGaurdService]},
  { path: 'discussion/:id', component:  DiscussionComponent,canActivate:[AuthGaurdService]},
  { path: 'messagerie/:id', component:  MessagerieComponent,canActivate:[AuthGaurdService]},
  { path: 'users', component: UserListComponent,canActivate:[AuthGaurdService]},
  { path: 'create/discussion', component: CreateDiscussionComponent,canActivate:[AuthGaurdService]},
  { path: 'forum', component: ForumComponent,canActivate:[AuthGaurdService]},
  { path: 'subject-detail/:id', component: SubjectDetailComponent,canActivate:[AuthGaurdService] },
  { path: 'messagerie', component: MessagerieComponent,canActivate:[AuthGaurdService] },
  { path: 'message-list', component: MessageListComponent,canActivate:[AuthGaurdService] },
  { path: 'user/add', component: CreateUserComponent,canActivate:[AuthGaurdService] },
  { path: 'update/user/:id', component: UpdateUserComponent,canActivate:[AuthGaurdService] },
  { path: 'details/user/:id', component: UserDetailComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
