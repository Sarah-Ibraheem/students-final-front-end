import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClientXsrfModule,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './auth/register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SpinnerComponent } from './auth/spinner/spinner.component';
import { StudentComponent } from './auth/register/student/student.component';
import { CompanyComponent } from './auth/register/company/company.component';
import { AuthInterceptorService } from './auth/services/auth-interceptor.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsComponent } from './posts/posts.component';
import {
  MainPostComponent,
  DeleteDialogComponent,
} from './posts/main-post/main-post.component';
import { GroupComponent } from './education/groups/group.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EmailVerificationComponent } from './auth/register/email-verification/email-verification.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './profile/update/update.component';
import { SidebarModule } from 'ng-sidebar';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { NestedTreeComponent } from './nested-tree/nested-tree.component';
import { MatTreeModule } from '@angular/material/tree';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';


import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { CommentComponent } from './posts/comment/comment.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SingleCommentComponent } from './posts/comment/single-comment/single-comment.component';

import { MatBadgeModule } from '@angular/material/badge';
import { SearchBarComponent } from './posts/search-bar/search-bar.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { ReplyComponent } from './posts/comment/reply/reply.component';
import { EventsComponent } from './events/events.component';
import { MatCardModule } from '@angular/material/card';
import { SingleEventComponent } from './events/single-event/single-event.component';
import { SingleReplyComponent } from './posts/comment/reply/single-reply/single-reply.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AnnouncementsComponent } from './education/announcements/announcements.component';
import { MatVideoModule } from 'mat-video';
import { SafePipe } from './shared/helpers/external-url.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { CompaniesComponent } from './companies/companies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PhotoComponent } from './posts/photo/photo.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ImagesCarouselComponent } from './events/images/images.-carousel.component';
import { AdminComponent } from './admin/admin.component';
import { UniversitiesComponent } from './admin/universities/universities.component';
import { FacultiesComponent } from './admin/faculties/faculties.component';
import { DepartmentsComponent } from './admin/departments/departments.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { UsersComponent } from './admin/users/users.component';
import { TagsComponent } from './admin/tags/tags.component';
import { AdminEventsComponent } from './admin/admin-events/admin-events.component';
import { QuestionsComponent } from './admin/questions/questions.component';
import { MatTableModule } from '@angular/material/table';


import { ToolsComponent } from './tools/tools.component';
import { AddToolComponent } from './tools/add-tool/add-tool.component';
import { ToolPostComponent,EditToolDialog,DeleteTool } from './tools/tool-post/tool-post.component';
import { ToolCommentsComponent } from './tools/tool-comments/tool-comments.component';
import { SingletoolCommentComponent } from './tools/tool-comments/singletool-comment/singletool-comment.component';
import { AdminToolsComponent } from './admin/admin-tools/admin-tools.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    SpinnerComponent,
    StudentComponent,
    CompanyComponent,
    HomeComponent,
    PostsComponent,
    MainPostComponent,
    GroupComponent,
    AddPostComponent,
    EmailVerificationComponent,
    ProfileComponent,
    UpdateComponent,
    NavComponent,
    NestedTreeComponent,
    CommentComponent,
    SingleCommentComponent,
    SearchBarComponent,
    SettingsComponent,
    ReplyComponent,
    EventsComponent,
    SingleEventComponent,
    SingleReplyComponent,
    SidebarComponent,
    AnnouncementsComponent,
    SafePipe,
    DeleteDialogComponent,
    CompaniesComponent,
    NotFoundComponent,
    ToolsComponent,
    AddToolComponent,
    ToolPostComponent,
    ToolCommentsComponent,
    SingletoolCommentComponent,
    EditToolDialog,
    DeleteTool,
    PhotoComponent,
    AddEventComponent,
    ImagesCarouselComponent,
    AdminComponent,
    UniversitiesComponent,
    FacultiesComponent,
    DepartmentsComponent,
    CoursesComponent,
    UsersComponent,
    TagsComponent,
    AdminEventsComponent,
    QuestionsComponent,
    ToolsComponent,
    AdminToolsComponent,
    AdminPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-CSRF-TOKEN',
    }),
    SidebarModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatTreeModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatExpansionModule,
    MatBadgeModule,
    MatCardModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    MatVideoModule,
    MatDialogModule,
    MatSelectModule,
    FileUploadModule,
    InputTextareaModule,
    SimpleNotificationsModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule

  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
