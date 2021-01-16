import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ForumService } from './forum.service';
import { ForumComponent } from './forum/forum.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component:  ForumComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent,},
  { path: 'logout', component: LogoutComponent, },
  { path: 'users', component: UserListComponent,canActivate:[AuthGaurdService]},
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
