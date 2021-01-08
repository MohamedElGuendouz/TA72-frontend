import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ForumComponent } from './forum/forum.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'forum', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'subject-detail/:id', component: SubjectDetailComponent },
  { path: 'messagerie', component: MessagerieComponent },
  { path: 'message-list', component: MessageListComponent },
  { path: 'user/add', component: CreateUserComponent },
  { path: 'update/user/:id', component: UpdateUserComponent },
  { path: 'details/user/:id', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
