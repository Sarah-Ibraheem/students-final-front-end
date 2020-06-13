import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/services/auth.guard';
import { RedirectGuard } from './auth/services/redirect.guard';
import { HomeComponent } from './home/home.component';
import { EmailVerificationComponent } from './auth/register/email-verification/email-verification.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './profile/update/update.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { GroupComponent } from './education/groups/group.component';
import { EventsComponent } from './events/events.component';
import { SingleEventComponent } from './events/single-event/single-event.component';
import { AnnouncementsComponent } from './education/announcements/announcements.component';
import { CompaniesComponent } from './companies/companies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChatComponent } from './chat/chat.component';
import { AdminComponent } from './admin/admin.component';
import { UniversitiesComponent } from './admin/universities/universities.component';
import { FacultiesComponent } from './admin/faculties/faculties.component';
import { DepartmentsComponent } from './admin/departments/departments.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { UsersComponent } from './admin/users/users.component';
import { TagsComponent } from './admin/tags/tags.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminEventsComponent } from './admin/admin-events/admin-events.component';
import { from } from 'rxjs';
import { QuestionsComponent } from './admin/questions/questions.component';
import { AdminToolsComponent } from './admin/admin-tools/admin-tools.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [RedirectGuard],
  },
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [RedirectGuard],
  },

  {
    path: 'email/verify',
    component: EmailVerificationComponent,
    canActivate: [RedirectGuard],
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'profile/update',
    component: UpdateComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'groups/:scope/:id',
    component: GroupComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'groups',
    component: GroupComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'events',
    component: EventsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'events/:scope/:id',
    component: EventsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'announcements',
    component: AnnouncementsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'announcements/:scope/:id',
    component: AnnouncementsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'companies',
    component: CompaniesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'companies/:type/:scope/:id',
    component: CompaniesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'messages/:id',
    component: ChatComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      { path: 'faculties', component: FacultiesComponent },
      { path: 'universities', component: UniversitiesComponent },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'users', component: UsersComponent },
      { path: 'tags', component: TagsComponent },
      { path: 'posts', component: AdminPostsComponent },
      { path: 'events', component: AdminEventsComponent },
      { path: 'questions', component: QuestionsComponent },
      { path: 'tools', component: AdminToolsComponent },
    ]
  },

  {
    path: 'tools',
    component: ToolsComponent,
    data: { type: '0' },
    canActivate: [AuthGuard]
  },

  {
    path: 'transportition',
    component: ToolsComponent,
    data: { type: '2' },
    canActivate: [AuthGuard]
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
