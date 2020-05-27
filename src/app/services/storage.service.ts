import { Injectable } from '@angular/core';
import { User } from '../auth/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private AllUniversitesLink = "http://localhost:8000/api/v1/university";
  

  constructor(public http: HttpClient) {}

  saveItem(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : false;
  }
  getUser(key: string) {
    const user = this.getItem(key);
    if (user) {
      return new User(
        user.id,
        user.name,
        user.email,
        user.type,
        user.address,
        user.mobile,
        user.avatar,
        user.verified,
        user._token
      );
    } else {
      return null;
    }
  }
  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  getAllUniversites() {
    return this.http.get<any>(this.AllUniversitesLink);
  }
 

  
}
