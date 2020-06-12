import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';
import { GroupsService } from 'src/app/services/groups.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/shared/models/group.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit, OnDestroy {
  constructor(
    private postsService: PostsService,
    private groupsService: GroupsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  facultyGroups = this.postsService.facultyGroups;
  departmentGroups = this.postsService.departmentGroups;
  posts: Post[] = [];
  currentGroup: Group;
  resource = 'posts';
  private subscription: Subscription;
  ngOnInit(): void {
    this.subscription = this.postsService.posts.subscribe((posts) => {
      this.posts = posts;
    });
    this.activatedRoute.params.subscribe((map) => {
      const key1 = 'id';
      const key2 = 'scope';
      const id = map[key1];
      const scope = map[key2];
      let tmp: Group;
      if (this.groupsService.departmentGroups[0]) {
        tmp = this.groupsService.departmentGroups[0];
      } else {
        tmp = this.groupsService.facultyGroups[0];
      }
      if (id && scope) {
        this.currentGroup = this.groupsService.getGroup(id, scope);
      } else {
        this.router.navigate(['/groups', tmp.scope, tmp.id]);
      }
      if (this.currentGroup) {
        this.getPosts(
          'posts',
          this.currentGroup.scope,
          this.currentGroup.id,
          1
        );
      } else {
        this.router.navigate(['/groups', tmp.scope, tmp.id]);
      }
    });
  }
  getPosts(resource, scope, id, page) {
    this.postsService.getPosts(resource, scope, id, '', page);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
