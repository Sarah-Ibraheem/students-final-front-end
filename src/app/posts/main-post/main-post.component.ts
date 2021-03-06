import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { Post } from 'src/app/education/models/post.model';
import { Group } from 'src/app/shared/models/group.model';
import { PostsService } from 'src/app/education/services/posts.service';
import { StorageService } from 'src/app/services/storage.service';
import { User } from 'src/app/auth/user.model';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.scss'],
})
export class MainPostComponent implements OnInit {
  @Input() group: Group;
  @Input() post: Post;
  @Input() resource: string;
  @Input() type;
  user: User;
  comment = '';
  postBody;
  msbapTitle = 'Audio Title';
  msbapAudioUrl = 'Link to audio URL';
  msbapDisplayTitle = false;
  msbapDisplayVolumeControls = true;
  constructor(
    private postsService: PostsService,
    private storage: StorageService,
    public deleteDialog: MatDialog
  ) {}
  isEmpty = true;
  editing = false;
  ngOnInit() {
    this.postBody = this.post.body;
    this.user = this.storage.getUser('user');
  }
  onCommenting($event) {
    if ($event.target.value) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }
  onAddComment(postId) {
    this.postsService.addComment(this.resource, this.comment, postId);
    setTimeout(() => {
      this.comment = '';
    }, 1500);
  }

  onEditPost() {
    this.editing = true;
  }
  onUpdatePost() {
    this.postsService
      .updatePost(
        this.resource,
        { body: this.postBody, title: 'default' },
        this.post.id
      )
      .subscribe((res) => {
        console.log(res);
        this.post.body = this.postBody;
        this.editing = false;
      });
  }
  onDeletePost() {
    const dialogRef = this.deleteDialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.postsService.deletePost(this.resource, this.post.id);
      }
    });
  }
  onReportPost() {
    this.postsService.reportPost(this.post.id);
    this.post.setReported(true);
  }
}
@Component({
  selector: 'delete-dialog',
  templateUrl: './delete-dialog.html',
})
export class DeleteDialogComponent {}
