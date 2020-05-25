import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { HttpService } from 'src/app/services/http.service';

/*
this service will handle all login , logout , register operations for the whole app
and contains a user subject to subscribe to any time for checking user status 
logged in or not
*/

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  constructor(
    private httpService: HttpService,
    private router: Router,
    private storageService: StorageService
  ) {}

  login(email: string, password: string) {
    return this.httpService
      .requestLogin({
        email: email,
        password: password,
        device_name: navigator.platform,
      })
      .pipe(
        tap((res: any) => {
          const { user, token } = res.data;
          const currentUser = new User(
            user.id,
            user.name,
            user.email,
            user.type,
            user.address,
            user.mobile,
            user.avatar,
            user.verified,
            token
          );
          this.user.next(currentUser);
          this.storageService.saveItem('user', currentUser);
        })
      );
  }

  autoLogin() {
    const user = this.storageService.getUser('user');
    if (user) {
      if (user.token) {
        this.user.next(user);
      }
    }
  }

  logout() {
    this.httpService.requestLogout(navigator.platform).subscribe(
      (res) => {
        if (res) {
          console.log(res);
          this.user.next(null);
          this.storageService.removeItem('user');
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
