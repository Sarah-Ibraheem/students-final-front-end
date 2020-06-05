import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';
import { GroupsService } from 'src/app/services/groups.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/shared/models/group.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit, OnDestroy {
  facultyGroups = this.postsService.facultyGroups;
  // departmentGroups = this.postsService.departmentGroups;
  posts: Post[] = [];
  currentGroup: Group;
  resource = 'events';
  type = '3';
  private subscription: Subscription;
  constructor(
    private postsService: PostsService,
    private groupsService: GroupsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.facultyGroups.length < 0) {
      this.groupsService.getGroups();
    }
    this.subscription = this.postsService.posts.subscribe((posts) => {
      this.posts = posts;
    });
    this.activatedRoute.params.subscribe((map) => {
      const key = 'id';
      const key2 = 'scope';
      const id = map[key];
      const scope = map[key2];
      const tmp = this.groupsService.facultyGroups[0].id;
      if (id && scope) {
        this.currentGroup = this.groupsService.getGroup(id, scope);
      } else {
        this.router.navigate(['/announcements', 1, tmp]);
      }
      if (this.currentGroup) {
        this.getPosts(
          'events',
          (+this.currentGroup.scope - 1).toString(),
          this.currentGroup.id,
          1
        );
      } else {
        this.router.navigate(['/announcements', 1, tmp]);
      }
    });
  }

  getPosts(resource, scope, id, page) {
    this.postsService.getPosts(resource, scope, id, this.type, page);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
