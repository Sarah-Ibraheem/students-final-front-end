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
  private subscription: Subscription;
  ngOnInit(): void {
    if (this.departmentGroups.length < 0) {
      this.groupsService.getGroups();
    }
    this.subscription = this.postsService.posts.subscribe((posts) => { 
      this.posts = posts;
    });
    this.activatedRoute.params.subscribe((map) => {
      const key = 'id';
      const id = map[key];
      const tmp = this.groupsService.departmentGroups[0].id;
      if (id) {
        this.currentGroup = this.groupsService.getGroup(id);
      } else {
        this.router.navigate(['/groups', tmp]);
      }
      if (this.currentGroup) {
        this.getPosts(this.currentGroup.scope, this.currentGroup.id, 1);
      } else {
        this.router.navigate(['/groups', tmp]);
      }
    });
  }
  getPosts(scope, id, page) {
    this.postsService.getPosts(scope, id, page);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}